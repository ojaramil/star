/**
 * S.T.A.R - Sistema de Gamificación
 * Logros, rachas, niveles XP y estadísticas avanzadas
 */

const STAR_GAMIFICATION = {

    // ============================================================
    // CONFIGURACIÓN DE NIVELES
    // ============================================================
    NIVELES: [
        { nombre: 'Novato', xpMin: 0, icono: '🌱', color: '#94a3b8' },
        { nombre: 'Aprendiz', xpMin: 100, icono: '📘', color: '#3b82f6' },
        { nombre: 'Practicante', xpMin: 300, icono: '⚡', color: '#8b5cf6' },
        { nombre: 'Avanzado', xpMin: 600, icono: '🔥', color: '#f59e0b' },
        { nombre: 'Experto', xpMin: 1000, icono: '💎', color: '#10b981' },
        { nombre: 'Maestro', xpMin: 2000, icono: '👑', color: '#f97316' },
        { nombre: 'Leyenda', xpMin: 5000, icono: '🏆', color: '#ec4899' }
    ],

    // ============================================================
    // DEFINICIÓN DE LOGROS
    // ============================================================
    LOGROS: {
        primeraRespuesta: {
            id: 'primeraRespuesta',
            nombre: '¡Primera Respuesta!',
            descripcion: 'Responde tu primera situación',
            icono: '🎯',
            condicion: (stats) => stats.totalIntentos >= 1
        },
        racha3: {
            id: 'racha3',
            nombre: 'En Racha',
            descripcion: '3 respuestas correctas seguidas',
            icono: '🔥',
            condicion: (stats) => stats.rachaMejor >= 3
        },
        racha5: {
            id: 'racha5',
            nombre: '¡Imparable!',
            descripcion: '5 respuestas correctas seguidas',
            icono: '⚡',
            condicion: (stats) => stats.rachaMejor >= 5
        },
        racha10: {
            id: 'racha10',
            nombre: 'Máquina de Aciertos',
            descripcion: '10 respuestas correctas seguidas',
            icono: '💫',
            condicion: (stats) => stats.rachaMejor >= 10
        },
        perfeccion: {
            id: 'perfeccion',
            nombre: 'Perfeccionista',
            descripcion: '100% de aciertos en una sesión (mín. 10 preguntas)',
            icono: '💯',
            condicion: (stats) => stats.intentosSesion >= 10 && stats.aciertosPercentSesion === 100
        },
        veterano50: {
            id: 'veterano50',
            nombre: 'Veterano',
            descripcion: 'Responde 50 situaciones en total',
            icono: '🎖️',
            condicion: (stats) => stats.totalIntentos >= 50
        },
        veterano200: {
            id: 'veterano200',
            nombre: 'Maestro del Entrenamiento',
            descripcion: 'Responde 200 situaciones en total',
            icono: '🏅',
            condicion: (stats) => stats.totalIntentos >= 200
        },
        veterano500: {
            id: 'veterano500',
            nombre: 'Leyenda STAR',
            descripcion: 'Responde 500 situaciones en total',
            icono: '🏆',
            condicion: (stats) => stats.totalIntentos >= 500
        },
        primerNivel: {
            id: 'primerNivel',
            nombre: 'Subiendo de Nivel',
            descripcion: 'Alcanza el nivel Aprendiz',
            icono: '📘',
            condicion: (stats) => stats.totalXP >= 100
        },
        nivelAvanzado: {
            id: 'nivelAvanzado',
            nombre: 'En Camino al Éxito',
            descripcion: 'Alcanza el nivel Avanzado',
            icono: '🔥',
            condicion: (stats) => stats.totalXP >= 600
        },
        nivelExperto: {
            id: 'nivelExperto',
            nombre: 'Sabiduría Social',
            descripcion: 'Alcanza el nivel Experto',
            icono: '💎',
            condicion: (stats) => stats.totalXP >= 1000
        },
        record: {
            id: 'record',
            nombre: '¡Nuevo Récord!',
            descripcion: 'Supera tu récord personal en un módulo',
            icono: '📈',
            condicion: (stats) => stats.nuevoRecord === true
        }
    },

    // ============================================================
    // PUNTOS Y MULTIPLICADORES
    // ============================================================
    XP_BASE: 10,
    XP_RACHA_BONUS: 5,
    XP_MULTIPLICADOR: {
        3: 2,    // Racha de 3: x2
        5: 3,    // Racha de 5: x3
        10: 5,   // Racha de 10: x5
        20: 10   // Racha de 20: x10
    },

    // ============================================================
    // MÉTODOS PRINCIPALES
    // ============================================================

    /**
     * Calcular XP ganado por una respuesta correcta
     */
    calcularXP(rachaActual) {
        let xp = this.XP_BASE;
        let multiplicador = 1;

        // Encontrar el multiplicador más alto que aplique
        for (const [racha, mult] of Object.entries(this.XP_MULTIPLICADOR)) {
            if (rachaActual >= parseInt(racha)) {
                multiplicador = mult;
            }
        }

        xp += (this.XP_RACHA_BONUS * Math.min(rachaActual, 20));
        return Math.round(xp * multiplicador);
    },

    /**
     * Obtener nivel actual basado en XP total
     */
    getNivel(xpTotal) {
        let nivelActual = this.NIVELES[0];
        for (const nivel of this.NIVELES) {
            if (xpTotal >= nivel.xpMin) {
                nivelActual = nivel;
            }
        }
        return nivelActual;
    },

    /**
     * Obtener siguiente nivel
     */
    getSiguienteNivel(xpTotal) {
        for (const nivel of this.NIVELES) {
            if (xpTotal < nivel.xpMin) {
                return nivel;
            }
        }
        return null; // Ya está en el nivel máximo
    },

    /**
     * Calcular progreso hacia el siguiente nivel (0-100)
     */
    getProgresoNivel(xpTotal) {
        const nivelActual = this.getNivel(xpTotal);
        const siguienteNivel = this.getSiguienteNivel(xpTotal);

        if (!siguienteNivel) return 100;

        const xpEnNivel = xpTotal - nivelActual.xpMin;
        const xpParaSiguiente = siguienteNivel.xpMin - nivelActual.xpMin;

        return Math.round((xpEnNivel / xpParaSiguiente) * 100);
    },

    /**
     * Verificar logros desbloqueados
     */
    verificarLogros(stats, logrosActuales = []) {
        const nuevosLogros = [];

        for (const [id, logro] of Object.entries(this.LOGROS)) {
            if (!logrosActuales.includes(id) && logro.condicion(stats)) {
                nuevosLogros.push(logro);
            }
        }

        return nuevosLogros;
    },

    /**
     * Cargar stats de gamificación desde localStorage/Firebase
     */
    cargarStats(habilidadKey) {
        const datos = JSON.parse(localStorage.getItem('star-gamification') || '{}');
        return datos[habilidadKey] || {
            totalXP: 0,
            totalIntentos: 0,
            totalAciertos: 0,
            rachaActual: 0,
            rachaMejor: 0,
            record: 0,
            logros: [],
            sesiones: 0,
            // Stats de sesión actual
            intentosSesion: 0,
            aciertSesion: 0,
            xpSesion: 0
        };
    },

    /**
     * Guardar stats de gamificación
     */
    guardarStats(habilidadKey, stats) {
        const datos = JSON.parse(localStorage.getItem('star-gamification') || '{}');
        datos[habilidadKey] = stats;
        localStorage.setItem('star-gamification', JSON.stringify(datos));

        // Sincronizar con Firebase si está disponible
        this.syncToFirebase(habilidadKey, stats);
    },

    /**
     * Cargar stats globales (sumatorio de todas las habilidades)
     */
    cargarStatsGlobales() {
        const datos = JSON.parse(localStorage.getItem('star-gamification') || '{}');
        let globals = {
            totalXP: 0,
            totalIntentos: 0,
            totalAciertos: 0,
            rachaMejor: 0,
            logros: []
        };

        for (const key in datos) {
            const s = datos[key];
            globals.totalXP += s.totalXP || 0;
            globals.totalIntentos += s.totalIntentos || 0;
            globals.totalAciertos += s.totalAciertos || 0;
            if ((s.rachaMejor || 0) > globals.rachaMejor) {
                globals.rachaMejor = s.rachaMejor;
            }
            if (s.logros) {
                s.logros.forEach(l => {
                    if (!globals.logros.includes(l)) globals.logros.push(l);
                });
            }
        }

        return globals;
    },

    /**
     * Sincronizar con Firebase
     */
    async syncToFirebase(habilidadKey, stats) {
        const starid = localStorage.getItem('star-id');
        if (!starid || !window.STAR_DB) return;

        try {
            const db = window.STAR_DB;

            // Guardar progreso del módulo
            await db.collection('users').doc(starid)
                .collection('progress').doc(habilidadKey)
                .set({
                    ...stats,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });

            // Actualizar stats globales
            const globales = this.cargarStatsGlobales();
            await db.collection('users').doc(starid).set({
                stats: {
                    totalXP: globales.totalXP,
                    totalIntentos: globales.totalIntentos,
                    totalAciertos: globales.totalAciertos,
                    rachaMejor: globales.rachaMejor,
                    nivel: this.getNivel(globales.totalXP).nombre,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }
            }, { merge: true });

            // Actualizar leaderboard del módulo
            await db.collection('leaderboard').doc(habilidadKey)
                .collection('scores').doc(starid)
                .set({
                    starid: starid,
                    puntos: stats.totalXP || 0,
                    record: stats.record || 0,
                    nivel: this.getNivel(globales.totalXP).nombre,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });

            console.log('🔥 Gamificación sincronizada con Firebase');
        } catch (err) {
            console.warn('⚠️ Error sincronizando gamificación:', err);
        }
    },

    /**
     * Cargar datos desde Firebase
     */
    async loadFromFirebase(habilidadKey) {
        const starid = localStorage.getItem('star-id');
        if (!starid || !window.STAR_DB) return null;

        try {
            const db = window.STAR_DB;
            const doc = await db.collection('users').doc(starid)
                .collection('progress').doc(habilidadKey).get();

            if (doc.exists) {
                return doc.data();
            }
        } catch (err) {
            console.warn('⚠️ Error cargando desde Firebase:', err);
        }
        return null;
    },

    // ============================================================
    // UI HELPERS - Generar HTML de gamificación
    // ============================================================

    /**
     * Generar HTML de la barra de XP y nivel
     */
    renderXPBar(stats) {
        const globales = this.cargarStatsGlobales();
        const nivel = this.getNivel(globales.totalXP);
        const siguiente = this.getSiguienteNivel(globales.totalXP);
        const progreso = this.getProgresoNivel(globales.totalXP);

        const siguienteTexto = siguiente
            ? `${siguiente.icono} ${siguiente.nombre} (${siguiente.xpMin} XP)`
            : '¡Nivel máximo alcanzado!';

        return `
        <div class="xp-bar-container" id="xpBarContainer">
            <div class="xp-header">
                <div class="xp-nivel">
                    <span class="xp-nivel-icono">${nivel.icono}</span>
                    <span class="xp-nivel-nombre" style="color: ${nivel.color}">${nivel.nombre}</span>
                </div>
                <div class="xp-total">${globales.totalXP} XP</div>
            </div>
            <div class="xp-progress-bar">
                <div class="xp-progress-fill" style="width: ${progreso}%; background: linear-gradient(90deg, ${nivel.color}, ${siguiente ? siguiente.color : nivel.color})"></div>
            </div>
            <div class="xp-footer">
                <span class="xp-next">Siguiente: ${siguienteTexto}</span>
                <span class="xp-percent">${progreso}%</span>
            </div>
        </div>`;
    },

    /**
     * Generar HTML del panel de rachas
     */
    renderRachaPanel(stats) {
        const rachaClase = stats.rachaActual >= 10 ? 'racha-epica'
            : stats.rachaActual >= 5 ? 'racha-fuego'
                : stats.rachaActual >= 3 ? 'racha-buena'
                    : '';

        const multiplicador = this.getMultiplicador(stats.rachaActual);

        return `
        <div class="racha-panel ${rachaClase}" id="rachaPanel">
            <div class="racha-flame">${stats.rachaActual >= 3 ? '🔥' : '💫'}</div>
            <div class="racha-info">
                <div class="racha-count">${stats.rachaActual}</div>
                <div class="racha-label">racha actual</div>
            </div>
            ${multiplicador > 1 ? `<div class="racha-mult">x${multiplicador}</div>` : ''}
            <div class="racha-best">
                <span class="racha-best-icon">🏆</span>
                <span>Mejor: ${stats.rachaMejor}</span>
            </div>
        </div>`;
    },

    /**
     * Obtener multiplicador de racha
     */
    getMultiplicador(racha) {
        let mult = 1;
        for (const [r, m] of Object.entries(this.XP_MULTIPLICADOR)) {
            if (racha >= parseInt(r)) mult = m;
        }
        return mult;
    },

    /**
     * Generar notificación de logro
     */
    renderLogroNotificacion(logro) {
        return `
        <div class="logro-notificacion" id="logroNotif">
            <div class="logro-notif-content">
                <div class="logro-notif-icono">${logro.icono}</div>
                <div class="logro-notif-info">
                    <div class="logro-notif-titulo">¡Logro Desbloqueado!</div>
                    <div class="logro-notif-nombre">${logro.nombre}</div>
                    <div class="logro-notif-desc">${logro.descripcion}</div>
                </div>
            </div>
        </div>`;
    },

    /**
     * Generar notificación de XP ganada
     */
    renderXPGanada(xp, racha) {
        const mult = this.getMultiplicador(racha);
        return `
        <div class="xp-ganada-notif" id="xpNotif">
            +${xp} XP ${mult > 1 ? `<span class="xp-mult-badge">x${mult}</span>` : ''}
        </div>`;
    },

    /**
     * Generar HTML del récord
     */
    renderRecord(stats, habilidadKey) {
        return `
        <div class="record-panel" id="recordPanel">
            <div class="record-item">
                <span class="record-icon">🏆</span>
                <span class="record-label">Récord</span>
                <span class="record-value">${stats.record || 0} pts</span>
            </div>
            <div class="record-item">
                <span class="record-icon">📊</span>
                <span class="record-label">Total</span>
                <span class="record-value">${stats.totalIntentos || 0} partidas</span>
            </div>
            <div class="record-item">
                <span class="record-icon">🎯</span>
                <span class="record-label">Precisión</span>
                <span class="record-value">${stats.totalIntentos ? Math.round((stats.totalAciertos / stats.totalIntentos) * 100) : 0}%</span>
            </div>
        </div>`;
    },

    /**
     * Obtener CSS de gamificación
     */
    getCSS() {
        return `
        /* ============================================ */
        /* GAMIFICACIÓN - XP Bar                         */
        /* ============================================ */
        .xp-bar-container {
            background: white;
            padding: 14px 20px;
            border-bottom: 1px solid var(--border);
        }
        .xp-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .xp-nivel {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .xp-nivel-icono {
            font-size: 20px;
        }
        .xp-nivel-nombre {
            font-weight: 700;
            font-size: 15px;
        }
        .xp-total {
            font-weight: 700;
            font-size: 14px;
            color: var(--orange);
        }
        .xp-progress-bar {
            height: 8px;
            background: #e2e8f0;
            border-radius: 999px;
            overflow: hidden;
        }
        .xp-progress-fill {
            height: 100%;
            border-radius: 999px;
            transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .xp-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 6px;
            font-size: 12px;
            color: var(--text-muted);
        }
        .xp-next { font-weight: 500; }
        .xp-percent { font-weight: 600; }

        /* ============================================ */
        /* GAMIFICACIÓN - Racha Panel                    */
        /* ============================================ */
        .racha-panel {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 16px;
            background: var(--bg-secondary);
            border-radius: 12px;
            transition: all 0.3s ease;
        }
        .racha-panel.racha-buena {
            background: #fff7ed;
            border: 1px solid #fed7aa;
        }
        .racha-panel.racha-fuego {
            background: linear-gradient(135deg, #fff7ed, #fef3c7);
            border: 1px solid #fbbf24;
            animation: rachaGlow 2s ease-in-out infinite;
        }
        .racha-panel.racha-epica {
            background: linear-gradient(135deg, #fef3c7, #fce7f3);
            border: 1px solid #f472b6;
            animation: rachaGlow 1s ease-in-out infinite;
        }
        @keyframes rachaGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0); }
            50% { box-shadow: 0 0 20px 4px rgba(249,115,22,0.15); }
        }
        .racha-flame { font-size: 24px; }
        .racha-info { text-align: center; }
        .racha-count {
            font-size: 22px;
            font-weight: 800;
            color: var(--orange);
            line-height: 1;
        }
        .racha-label {
            font-size: 10px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .racha-mult {
            background: var(--orange);
            color: white;
            padding: 4px 10px;
            border-radius: 999px;
            font-weight: 800;
            font-size: 14px;
            animation: multPulse 0.6s ease-out;
        }
        @keyframes multPulse {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); opacity: 1; }
        }
        .racha-best {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
            color: var(--text-muted);
            font-weight: 500;
            margin-left: auto;
        }

        /* ============================================ */
        /* GAMIFICACIÓN - Logro Notificación              */
        /* ============================================ */
        .logro-notificacion {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            animation: logroSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1), logroFadeOut 0.5s ease 4.5s forwards;
        }
        @keyframes logroSlideIn {
            from { transform: translateX(120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes logroFadeOut {
            to { transform: translateX(120%); opacity: 0; }
        }
        .logro-notif-content {
            display: flex;
            align-items: center;
            gap: 14px;
            background: linear-gradient(135deg, #1e293b, #334155);
            color: white;
            padding: 16px 24px;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.1);
            min-width: 280px;
        }
        .logro-notif-icono {
            font-size: 36px;
            animation: logroIconBounce 0.6s ease 0.3s;
        }
        @keyframes logroIconBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.4) rotate(10deg); }
        }
        .logro-notif-titulo {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #fbbf24;
            font-weight: 600;
        }
        .logro-notif-nombre {
            font-size: 16px;
            font-weight: 700;
        }
        .logro-notif-desc {
            font-size: 12px;
            color: #94a3b8;
            margin-top: 2px;
        }

        /* ============================================ */
        /* GAMIFICACIÓN - XP Ganada Notif                 */
        /* ============================================ */
        .xp-ganada-notif {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 28px;
            font-weight: 800;
            color: var(--green);
            z-index: 9999;
            pointer-events: none;
            animation: xpFloat 1.5s ease-out forwards;
            text-shadow: 0 2px 10px rgba(16,185,129,0.3);
        }
        @keyframes xpFloat {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
            20% { transform: translate(-50%, -70%) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -150%) scale(0.8); opacity: 0; }
        }
        .xp-mult-badge {
            background: var(--orange);
            color: white;
            padding: 2px 8px;
            border-radius: 999px;
            font-size: 16px;
            margin-left: 4px;
            vertical-align: middle;
        }

        /* ============================================ */
        /* GAMIFICACIÓN - Récord Panel                    */
        /* ============================================ */
        .record-panel {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .record-item {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            background: var(--bg-secondary);
            border-radius: 10px;
            font-size: 13px;
        }
        .record-icon { font-size: 16px; }
        .record-label {
            color: var(--text-muted);
            font-weight: 500;
        }
        .record-value {
            font-weight: 700;
            color: var(--text);
        }

        /* ============================================ */
        /* GAMIFICACIÓN - Stats Session Summary           */
        /* ============================================ */
        .session-summary {
            background: linear-gradient(135deg, #1e293b, #334155);
            color: white;
            padding: 24px;
            border-radius: var(--radius);
            margin-bottom: 20px;
            text-align: center;
        }
        .session-summary h3 {
            font-size: 20px;
            margin-bottom: 16px;
            color: #fbbf24;
        }
        .session-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 16px;
        }
        .session-stat {
            padding: 12px;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
        }
        .session-stat-value {
            font-size: 24px;
            font-weight: 800;
            color: #f97316;
        }
        .session-stat-label {
            font-size: 11px;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Nuevo récord animation */
        .new-record {
            animation: newRecordPulse 1s ease-in-out infinite;
        }
        @keyframes newRecordPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); text-shadow: 0 0 20px rgba(249,115,22,0.5); }
        }

        /* Responsive */
        @media (max-width: 640px) {
            .logro-notificacion {
                top: 10px;
                right: 10px;
                left: 10px;
            }
            .logro-notif-content {
                min-width: auto;
            }
            .racha-panel {
                padding: 8px 12px;
                gap: 8px;
            }
            .racha-count { font-size: 18px; }
            .record-panel {
                flex-direction: column;
            }
        }
        `;
    }
};

// Exponer globalmente
window.STAR_GAMIFICATION = STAR_GAMIFICATION;
