// STAR Padres — persistencia compartida entre index y páginas de habilidad
function cargarProgresoHabilidad(habilidad) {
  const datos = JSON.parse(localStorage.getItem('star-padres-progreso') || '{}');
  return datos[habilidad] || null;
}

function guardarProgresoHabilidad(habilidad, progreso) {
  const datos = JSON.parse(localStorage.getItem('star-padres-progreso') || '{}');
  datos[habilidad] = progreso;
  localStorage.setItem('star-padres-progreso', JSON.stringify(datos));
}

function getHabilidadKey() {
  const file = window.location.pathname.split('/').pop();
  return file.replace(/^STAR-/, '').replace(/\.html$/, '');
}
