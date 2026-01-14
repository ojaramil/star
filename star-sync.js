/**
 * S.T.A.R - Sistema de sincronización de progreso
 * Este script se comparte entre todas las páginas de habilidades
 */

const API_URL = 'https://script.google.com/macros/s/AKfycbyQXYELpZVYAbcRcXFPkFGH8nQQVTAs-d4owkORUYZmlUS2rGewTzjdWPZp3kKQapEr/exec';

// Helper para llamar al API
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

// Obtener STARID del localStorage
function getStarId() {
    return localStorage.getItem('star-id');
}

// Guardar progreso de una habilidad
function guardarProgresoHabilidad(habilidadKey, datos) {
    // Guardar en localStorage
    const progreso = JSON.parse(localStorage.getItem('star-progreso') || '{}');
    progreso[habilidadKey] = datos;
    localStorage.setItem('star-progreso', JSON.stringify(progreso));

    // Sincronizar con servidor en segundo plano
    sincronizarConServidor();
}

// Cargar progreso de una habilidad
function cargarProgresoHabilidad(habilidadKey) {
    const progreso = JSON.parse(localStorage.getItem('star-progreso') || '{}');
    return progreso[habilidadKey] || null;
}

// Sincronizar con servidor
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
        console.log('✓ Progreso sincronizado');
    } catch (err) {
        console.error('Error sincronizando:', err);
    }
}

// Extraer key de habilidad desde el nombre del archivo
function getHabilidadKey() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename.replace('STAR-', '');
}
