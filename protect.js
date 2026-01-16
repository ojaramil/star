/**
 * S.T.A.R - Protección de contenido
 * Bloquea copias, clic derecho y atajos de teclado
 */

(function () {
    'use strict';

    // Bloquear clic derecho
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Bloquear selección de texto
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
        return false;
    });

    // Bloquear arrastrar elementos
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
        return false;
    });

    // Bloquear atajos de teclado
    document.addEventListener('keydown', function (e) {
        // F12 - DevTools
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl/Cmd + U - Ver código fuente
        if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl/Cmd + S - Guardar página
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            return false;
        }

        // Ctrl/Cmd + C - Copiar (solo fuera de inputs)
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                return false;
            }
        }

        // Ctrl/Cmd + Shift + I - DevTools
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Ctrl/Cmd + Shift + J - Console
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }

        // Ctrl/Cmd + Shift + C - Inspect element
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }
    });

    // CSS para deshabilitar selección
    const style = document.createElement('style');
    style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    input, textarea {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
  `;
    document.head.appendChild(style);

    // Detectar DevTools abierto (básico)
    let devtoolsOpen = false;
    const threshold = 160;

    setInterval(function () {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                // Opcional: redirigir o mostrar aviso
                // window.location.href = 'index.html';
            }
        } else {
            devtoolsOpen = false;
        }
    }, 1000);

})();
