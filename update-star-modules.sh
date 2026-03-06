#!/bin/bash
# Script para agregar Firebase + Gamificación a todos los módulos STAR
# Ejecutar desde la carpeta del proyecto: bash update-star-modules.sh

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
echo "📁 Directorio: $PROJECT_DIR"

for file in "$PROJECT_DIR"/STAR-*.html; do
    filename=$(basename "$file")
    
    # Saltar relaciones-pareja ya que ya está actualizado
    if [ "$filename" = "STAR-relaciones-pareja.html" ]; then
        echo "⏭️  Saltando $filename (ya actualizado)"
        continue
    fi
    
    echo "🔄 Actualizando $filename..."
    
    # 1. Agregar Firebase SDK y gamification.js antes de </head>
    # Verificar si ya tiene firebase
    if grep -q "firebase-config.js" "$file"; then
        echo "  ⏭️  Firebase ya existe, saltando..."
    else
        sed -i '' 's|<script src="star-sync.js"></script>|<!-- Firebase SDK -->\
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>\
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>\
    <script src="firebase-config.js"></script>\
    <script src="star-sync.js"></script>\
    <script src="gamification.js"></script>|' "$file"
    fi
    
    # 2. Agregar div de gamificación después del stats-bar
    if grep -q "gamification-bar" "$file"; then
        echo "  ⏭️  Gamification bar ya existe, saltando..."
    else
        sed -i '' '/<\/div>/{
            N
            /progress-container.*\n.*<\/div>/a\
\
    <!-- Gamificación: XP Bar + Racha -->\
    <div id="gamification-bar"></div>
        }' "$file" 2>/dev/null || true
    fi
    
    # 3. Agregar inicialización de gamificación después de <script> principal
    if grep -q "STAR_GAMIFICATION" "$file"; then
        echo "  ⏭️  Gamificación JS ya existe, saltando..."
    else
        # Agregar código de gamificación antes del array SITUACIONES
        sed -i '' 's|const SITUACIONES = \[|// Inyectar CSS de gamificación\
        if (window.STAR_GAMIFICATION) {\
            const gStyle = document.createElement('"'"'style'"'"');\
            gStyle.textContent = STAR_GAMIFICATION.getCSS();\
            document.head.appendChild(gStyle);\
        }\
\
        const HABILIDAD_KEY = getHabilidadKey();\
        let gameStats = window.STAR_GAMIFICATION ? STAR_GAMIFICATION.cargarStats(HABILIDAD_KEY) : {};\
\
        function renderGamificationBar() {\
            if (!window.STAR_GAMIFICATION) return;\
            const bar = document.getElementById('"'"'gamification-bar'"'"');\
            if (bar) {\
                bar.innerHTML = STAR_GAMIFICATION.renderXPBar(gameStats) + \
                    '"'"'<div style="padding:8px 20px; display:flex; gap:12px; flex-wrap:wrap; align-items:center; justify-content:center;">'"'"' +\
                    STAR_GAMIFICATION.renderRachaPanel(gameStats) +\
                    STAR_GAMIFICATION.renderRecord(gameStats, HABILIDAD_KEY) +\
                    '"'"'</div>'"'"';\
            }\
        }\
        renderGamificationBar();\
\
        const SITUACIONES = [|' "$file"
    fi
    
    echo "  ✅ $filename actualizado"
done

echo ""
echo "✅ Todos los módulos actualizados"
echo ""
echo "⚠️  NOTA: Debes verificar manualmente que la lógica de gamificación"
echo "   (respuesta correcta/incorrecta) esté integrada en cada módulo."
echo "   El módulo STAR-relaciones-pareja.html es la referencia."
