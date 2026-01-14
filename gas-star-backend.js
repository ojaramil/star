/**
 * S.T.A.R - Sistema de Training para Autonomía y Relaciones
 * Google Apps Script Backend para sincronización de progreso
 * 
 * INSTRUCCIONES DE DESPLIEGUE:
 * 1. Crear un nuevo Google Sheet llamado "STAR-Database"
 * 2. Ir a Extensiones > Apps Script
 * 3. Pegar este código
 * 4. Implementar > Nueva implementación > Aplicación web
 * 5. Ejecutar como: Yo mismo
 * 6. Acceso: Cualquier persona
 * 7. Copiar la URL del despliegue y pegarla en el frontend
 */

// ============================================================
// CONFIGURACIÓN - Actualizar con tu Sheet ID
// ============================================================
const SHEET_ID = '18ZW5CFbPPBFJdks-0PMlj-rIz4JuJM-aXCjKe9-EjG8';

// ============================================================
// FUNCIONES PRINCIPALES
// ============================================================

function doGet(e) {
    return handleRequest(e);
}

function doPost(e) {
    return handleRequest(e);
}

function handleRequest(e) {
    // Configurar CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    try {
        const params = e.parameter;
        const action = params.action;

        let result;

        switch (action) {
            case 'register':
                result = registerUser();
                break;
            case 'recover':
                result = recoverUser(params.starid);
                break;
            case 'saveProgress':
                result = saveProgress(params.starid, params.data);
                break;
            case 'loadProgress':
                result = loadProgress(params.starid);
                break;
            case 'ping':
                result = { success: true, message: 'STAR API Online' };
                break;
            default:
                result = { success: false, error: 'Acción no válida' };
        }

        return ContentService
            .createTextOutput(JSON.stringify(result))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// ============================================================
// GESTIÓN DE USUARIOS
// ============================================================

function registerUser() {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let usersSheet = ss.getSheetByName('Usuarios');

    // Crear hoja si no existe
    if (!usersSheet) {
        usersSheet = ss.insertSheet('Usuarios');
        usersSheet.appendRow(['STARID', 'FechaCreacion', 'UltimoAcceso', 'Dispositivo']);
    }

    // Generar STARID único (formato: STAR-XXXX-XXXX)
    const starid = generateStarId();
    const now = new Date().toISOString();

    // Guardar usuario
    usersSheet.appendRow([starid, now, now, 'Web']);

    // NO crear hoja de progreso aquí - se creará cuando se guarde progreso real

    return {
        success: true,
        starid: starid,
        message: 'Usuario registrado exitosamente'
    };
}

function recoverUser(starid) {
    if (!starid) {
        return { success: false, error: 'STARID requerido' };
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const usersSheet = ss.getSheetByName('Usuarios');

    if (!usersSheet) {
        return { success: false, error: 'No hay usuarios registrados' };
    }

    // Buscar usuario
    const data = usersSheet.getDataRange().getValues();
    let found = false;
    let rowIndex = -1;

    for (let i = 1; i < data.length; i++) {
        if (data[i][0] === starid.toUpperCase()) {
            found = true;
            rowIndex = i + 1;
            break;
        }
    }

    if (!found) {
        return { success: false, error: 'STARID no encontrado' };
    }

    // Actualizar último acceso
    usersSheet.getRange(rowIndex, 3).setValue(new Date().toISOString());

    // Cargar progreso
    const progress = loadProgress(starid);

    return {
        success: true,
        starid: starid.toUpperCase(),
        progress: progress.data || {},
        message: 'Cuenta recuperada exitosamente'
    };
}

// ============================================================
// GESTIÓN DE PROGRESO
// ============================================================

function saveProgress(starid, dataJson) {
    if (!starid) {
        return { success: false, error: 'STARID requerido' };
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheetName = 'Progreso_' + starid.toUpperCase();
    let progressSheet = ss.getSheetByName(sheetName);

    // Crear hoja si no existe
    if (!progressSheet) {
        progressSheet = createProgressSheet(ss, starid);
    }

    // Parsear datos
    let data;
    try {
        data = JSON.parse(dataJson);
    } catch (e) {
        return { success: false, error: 'Datos inválidos' };
    }

    const now = new Date().toISOString();

    // Guardar cada habilidad
    for (const habilidad in data) {
        const row = findOrCreateRow(progressSheet, habilidad);
        const progData = data[habilidad];

        progressSheet.getRange(row, 2).setValue(progData.completadas || 0);
        progressSheet.getRange(row, 3).setValue(progData.puntos || 0);
        progressSheet.getRange(row, 4).setValue(progData.intentos || 0);
        progressSheet.getRange(row, 5).setValue(JSON.stringify(progData.dificultad || {}));
        progressSheet.getRange(row, 6).setValue(now);
    }

    return {
        success: true,
        message: 'Progreso guardado'
    };
}

function loadProgress(starid) {
    if (!starid) {
        return { success: false, error: 'STARID requerido' };
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheetName = 'Progreso_' + starid.toUpperCase();
    const progressSheet = ss.getSheetByName(sheetName);

    if (!progressSheet) {
        return { success: true, data: {} };
    }

    const data = progressSheet.getDataRange().getValues();
    const result = {};

    for (let i = 1; i < data.length; i++) {
        const habilidad = data[i][0];
        if (habilidad) {
            result[habilidad] = {
                completadas: data[i][1] || 0,
                puntos: data[i][2] || 0,
                intentos: data[i][3] || 0,
                dificultad: safeParseJSON(data[i][4]) || {},
                ultimaActualizacion: data[i][5] || ''
            };
        }
    }

    return {
        success: true,
        data: result
    };
}

// ============================================================
// UTILIDADES
// ============================================================

function generateStarId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let part1 = '';
    let part2 = '';

    for (let i = 0; i < 4; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return 'STAR-' + part1 + '-' + part2;
}

function createProgressSheet(ss, starid) {
    const sheetName = 'Progreso_' + starid.toUpperCase();
    let sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
        sheet = ss.insertSheet(sheetName);
        sheet.appendRow(['Habilidad', 'Completadas', 'Puntos', 'Intentos', 'Dificultad', 'UltimaActualizacion']);

        // Formatear encabezado
        sheet.getRange(1, 1, 1, 6).setBackground('#f97316').setFontColor('#ffffff').setFontWeight('bold');
    }

    return sheet;
}

function findOrCreateRow(sheet, habilidad) {
    const data = sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
        if (data[i][0] === habilidad) {
            return i + 1;
        }
    }

    // No existe, crear nueva fila
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1).setValue(habilidad);
    return lastRow + 1;
}

function safeParseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

// ============================================================
// TEST (Ejecutar manualmente para verificar)
// ============================================================

function testAPI() {
    // Probar registro
    const reg = registerUser();
    Logger.log('Registro:', reg);

    if (reg.success) {
        // Probar guardar progreso
        const testData = {
            'conversacion': { completadas: 25, puntos: 20, intentos: 30 },
            'amistades': { completadas: 10, puntos: 8, intentos: 12 }
        };

        const save = saveProgress(reg.starid, JSON.stringify(testData));
        Logger.log('Guardar:', save);

        // Probar cargar progreso
        const load = loadProgress(reg.starid);
        Logger.log('Cargar:', load);

        // Probar recuperar
        const recover = recoverUser(reg.starid);
        Logger.log('Recuperar:', recover);
    }
}
