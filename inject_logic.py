import os
import glob
import re

# Directorio actual (asumimos la carpeta del proyecto)
project_dir = os.path.dirname(os.path.abspath(__file__))

# Buscar todos los archivos HTML que empiecen con STAR- y NO sean relaciones-pareja
archivos = glob.glob(os.path.join(project_dir, 'STAR-*.html'))

codigo_correcto = """
                        // GAMIFICACIÓN: respuesta correcta
                        if (window.STAR_GAMIFICATION) {
                            gameStats.rachaActual = (gameStats.rachaActual || 0) + 1;
                            gameStats.totalAciertos = (gameStats.totalAciertos || 0) + 1;
                            gameStats.totalIntentos = (gameStats.totalIntentos || 0) + 1;
                            if (gameStats.rachaActual > (gameStats.rachaMejor || 0)) {
                                gameStats.rachaMejor = gameStats.rachaActual;
                            }
                            const xpGanado = STAR_GAMIFICATION.calcularXP(gameStats.rachaActual);
                            gameStats.totalXP = (gameStats.totalXP || 0) + xpGanado;
                            if (puntos > (gameStats.record || 0)) {
                                gameStats.record = puntos;
                                gameStats.nuevoRecord = true;
                            }
                            // Mostrar XP flotante
                            document.body.insertAdjacentHTML('beforeend', STAR_GAMIFICATION.renderXPGanada(xpGanado, gameStats.rachaActual));
                            setTimeout(() => { const n = document.getElementById('xpNotif'); if(n) n.remove(); }, 1600);
                            // Verificar logros
                            gameStats.aciertosPercentSesion = intentos ? Math.round((puntos/intentos)*100) : 0;
                            gameStats.intentosSesion = intentos;
                            const nuevos = STAR_GAMIFICATION.verificarLogros(gameStats, gameStats.logros || []);
                            nuevos.forEach(logro => {
                                gameStats.logros = gameStats.logros || [];
                                gameStats.logros.push(logro.id);
                                document.body.insertAdjacentHTML('beforeend', STAR_GAMIFICATION.renderLogroNotificacion(logro));
                                setTimeout(() => { const n = document.getElementById('logroNotif'); if(n) n.remove(); }, 5000);
                            });
                            STAR_GAMIFICATION.guardarStats(HABILIDAD_KEY, gameStats);
                            renderGamificationBar();
                        }
"""

codigo_incorrecto = """
                        // GAMIFICACIÓN: respuesta incorrecta
                        if (window.STAR_GAMIFICATION) {
                            gameStats.rachaActual = 0;
                            gameStats.totalIntentos = (gameStats.totalIntentos || 0) + 1;
                            gameStats.intentosSesion = intentos;
                            STAR_GAMIFICATION.guardarStats(HABILIDAD_KEY, gameStats);
                            renderGamificationBar();
                        }
"""

for archivo in archivos:
    if "STAR-relaciones-pareja.html" in archivo:
        continue
    
    with open(archivo, 'r', encoding='utf-8') as f:
        contenido = f.read()
    
    # 1. Inyectar lógica de respuesta correcta
    # Buscamos: fbText.textContent = "¡Excelente... o similar y luego setTimeout(() => { next(); }, 1200);
    # Regex para capturar todo el bloque antes del setTimeout
    patron_correcto = r'(fbText\.textContent\s*=\s*(?:["\']).*?(?:["\']);)(?!\s*// GAMIFICACIÓN)'
    
    # Reemplazamos la primera ocurrencia en el bloque "if (ok)"
    # Como la estructura de todos los html es idéntica, el primer fbText.textContent = ... es el del caso positivo
    def repl_correcto(match):
        return match.group(1) + "\n" + codigo_correcto
        
    contenido_nuevo = re.sub(patron_correcto, repl_correcto, contenido, count=1)
    
    # 2. Inyectar lógica de respuesta incorrecta
    # Buscamos el segundo fbText.textContent que pertenece al "else" o el primer setProgress
    # Vamos a usar una regex más controlada: Insertar justo antes del setProgress(idx, SITUACIONES.length);
    # Nos aseguramos que no se haya insertado ya.
    if "// GAMIFICACIÓN: respuesta incorrecta" not in contenido_nuevo:
        patron_incorrecto = r'(\s+)(setProgress\(idx,\s*SITUACIONES\.length\);)'
        def repl_incorrecto(match):
            indentation = match.group(1)
            # Como solo hay un setProgress dentro del evento click que está al final del if/else
            # lo insertamos justo antes de que se llame a setProgress.
            return indentation + codigo_incorrecto.strip() + "\n" + indentation + match.group(2)
        
        contenido_nuevo = re.sub(patron_incorrecto, repl_incorrecto, contenido_nuevo, count=1)
    
    if contenido != contenido_nuevo:
        with open(archivo, 'w', encoding='utf-8') as f:
            f.write(contenido_nuevo)
        print(f"✅ Inyectada lógica en: {os.path.basename(archivo)}")
    else:
        print(f"⏭️  Ya inyectado o no se pudo aplicar en: {os.path.basename(archivo)}")
