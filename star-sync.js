/**
 * S.T.A.R - Sistema de sincronización de progreso
 * Compatible con Firebase Firestore + localStorage fallback
 * Este script se comparte entre todas las páginas de habilidades
 */

// ============================================================
// CONFIGURACIÓN
// ============================================================
// URL legacy de Google Apps Script (fallback)
const API_URL = 'https://script.google.com/macros/s/AKfycbyQXYELpZVYAbcRcXFPkFGH8nQQVTAs-d4owkORUYZmlUS2rGewTzjdWPZp3kKQapEr/exec';

// Helper para llamar al API legacy
async function callAPI(params) {
    try {
        const url = API_URL + '?' + new URLSearchParams(params).toString();
        const response = await fetch(url, { method: 'GET', redirect: 'follow' });
        return await response.json();
    } catch (err) {
        console.error('Error API:', err);
        return { success: false, error: err.message };
    }
}

// ============================================================
// FUNCIONES DE IDENTIFICACIÓN
// ============================================================

// Obtener STARID del localStorage
function getStarId() {
    return localStorage.getItem('star-id');
}

// Extraer key de habilidad desde el nombre del archivo
function getHabilidadKey() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename.replace('STAR-', '');
}

// ============================================================
// FIREBASE: GUARDAR Y CARGAR PROGRESO
// ============================================================

// Guardar progreso de una habilidad (Firebase + localStorage)
function guardarProgresoHabilidad(habilidadKey, datos) {
    // Guardar en localStorage siempre (offline first)
    const progreso = JSON.parse(localStorage.getItem('star-progreso') || '{}');
    progreso[habilidadKey] = datos;
    localStorage.setItem('star-progreso', JSON.stringify(progreso));

    // Sincronizar con Firebase en segundo plano
    sincronizarConFirebase(habilidadKey, datos);
}

// Cargar progreso de una habilidad
function cargarProgresoHabilidad(habilidadKey) {
    const progreso = JSON.parse(localStorage.getItem('star-progreso') || '{}');
    return progreso[habilidadKey] || null;
}

// Sincronizar un módulo con Firebase
async function sincronizarConFirebase(habilidadKey, datos) {
    const starid = getStarId();
    if (!starid) return;

    // Si Firebase está disponible, usar Firebase
    if (window.STAR_DB) {
        try {
            const db = window.STAR_DB;
            await db.collection('users').doc(starid)
                .collection('progress').doc(habilidadKey)
                .set({
                    ...datos,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
            console.log('🔥 Progreso guardado en Firebase');
            return;
        } catch (err) {
            console.warn('⚠️ Firebase falló, intentando API legacy:', err);
        }
    }

    // Fallback: Google Apps Script legacy
    sincronizarConServidor();
}

// Sincronizar todo el progreso con servidor legacy
async function sincronizarConServidor() {
    const starid = getStarId();
    if (!starid) return;

    try {
        const progreso = JSON.parse(localStorage.getItem('star-progreso') || '{}');
        await callAPI({
            action: 'saveProgress',
            starid: starid,
            data: JSON.stringify(progreso)
        });
        console.log('✓ Progreso sincronizado (legacy)');
    } catch (err) {
        console.error('Error sincronizando:', err);
    }
}

// Cargar progreso desde Firebase
async function cargarDesdeFirebase(habilidadKey) {
    const starid = getStarId();
    if (!starid || !window.STAR_DB) return null;

    try {
        const db = window.STAR_DB;
        const doc = await db.collection('users').doc(starid)
            .collection('progress').doc(habilidadKey).get();

        if (doc.exists) {
            const data = doc.data();
            // Actualizar localStorage con datos de Firebase
            const progreso = JSON.parse(localStorage.getItem('star-progreso') || '{}');
            progreso[habilidadKey] = data;
            localStorage.setItem('star-progreso', JSON.stringify(progreso));
            return data;
        }
    } catch (err) {
        console.warn('⚠️ Error cargando desde Firebase:', err);
    }
    return null;
}

// ============================================================
// FIREBASE: GESTIÓN DE USUARIOS
// ============================================================

// Registrar usuario en Firebase
async function registrarUsuarioFirebase(name, email) {
    if (!window.STAR_DB) return null;

    try {
        const db = window.STAR_DB;
        const starid = generarStarId();

        await db.collection('users').doc(starid).set({
            profile: {
                name: name || 'Sin nombre',
                email: email || 'Sin email',
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            },
            stats: {
                totalXP: 0,
                totalIntentos: 0,
                totalAciertos: 0,
                rachaMejor: 0,
                nivel: 'Novato'
            }
        });

        console.log('🔥 Usuario registrado en Firebase:', starid);
        return { success: true, starid: starid };
    } catch (err) {
        console.warn('⚠️ Error registrando en Firebase:', err);
        return null;
    }
}

// Recuperar usuario desde Firebase
async function recuperarUsuarioFirebase(starid) {
    if (!window.STAR_DB) return null;

    try {
        const db = window.STAR_DB;
        const userDoc = await db.collection('users').doc(starid.toUpperCase()).get();

        if (userDoc.exists) {
            const userData = userDoc.data();

            // Cargar todo el progreso
            const progressSnapshot = await db.collection('users').doc(starid.toUpperCase())
                .collection('progress').get();

            const progress = {};
            progressSnapshot.forEach(doc => {
                progress[doc.id] = doc.data();
            });

            return {
                success: true,
                starid: starid.toUpperCase(),
                profile: userData.profile,
                stats: userData.stats,
                progress: progress
            };
        }
    } catch (err) {
        console.warn('⚠️ Error recuperando desde Firebase:', err);
    }
    return null;
}

// Generar STARID único
function generarStarId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let part1 = '', part2 = '';
    for (let i = 0; i < 4; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return 'STAR-' + part1 + '-' + part2;
}

// ============================================================
// FIREBASE: LEADERBOARD
// ============================================================

// Obtener top scores de un módulo
async function getLeaderboard(habilidadKey, limit = 10) {
    if (!window.STAR_DB) return [];

    try {
        const db = window.STAR_DB;
        const snapshot = await db.collection('leaderboard').doc(habilidadKey)
            .collection('scores')
            .orderBy('record', 'desc')
            .limit(limit)
            .get();

        const scores = [];
        snapshot.forEach(doc => {
            scores.push({ id: doc.id, ...doc.data() });
        });

        return scores;
    } catch (err) {
        console.warn('⚠️ Error obteniendo leaderboard:', err);
        return [];
    }
}
