const fs = require('fs');
const path = require('path');
const { DOMINIOS } = require('./data.js');

let mergedFiles = [];

for (const dominio of DOMINIOS) {
  const extraPath = path.join(__dirname, `extra-${dominio.slug}.js`);
  if (!fs.existsSync(extraPath)) continue;
  delete require.cache[require.resolve(extraPath)];
  const extra = require(extraPath);
  for (const hab of dominio.habilidades) {
    const nuevas = extra[hab.slug];
    if (!Array.isArray(nuevas)) continue;
    hab.situaciones.push(...nuevas);
  }
  mergedFiles.push(extraPath);
}

const out = `const DOMINIOS = ${JSON.stringify(DOMINIOS, null, 2)};\n\nmodule.exports = { DOMINIOS };\n`;
fs.writeFileSync(path.join(__dirname, 'data.js'), out, 'utf8');

for (const f of mergedFiles) fs.unlinkSync(f);

console.log('Fusionados:', mergedFiles.map(f => path.basename(f)).join(', ') || '(ninguno)');
for (const dominio of DOMINIOS) {
  for (const hab of dominio.habilidades) {
    console.log(`${dominio.slug}/${hab.slug}: ${hab.situaciones.length}`);
  }
}
