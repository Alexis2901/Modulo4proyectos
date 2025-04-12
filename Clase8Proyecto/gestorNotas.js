const fs = require('fs');
const filePath = './notas.json';

/**
 * @param {string} titulo 
 * @param {string} contenido 
 */
function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const notaExistente = notas.find((nota) => nota.titulo === titulo);
  if (notaExistente) {
    console.log(`Ya existe una nota con el título "${titulo}".`);
    return;
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}


function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    if (notas.length === 0) {
      console.log('No hay notas guardadas.');
    } else {
      console.log('Notas guardadas:');
      notas.forEach((nota, index) => {
        console.log(`\n${index + 1}. ${nota.titulo}\n${nota.contenido}`);
      });
    }
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * @param {string} titulo
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
      console.log(`No se encontró ninguna nota con el título "${titulo}".`);
      return;
    }

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');

agregarNota('Música', 'Escribir una nueva canción para mi nuevo Ep');
listarNotas();

agregarNota('Pendientes', 'Componer una nueva melodía para este lunes 13-04-2025');
listarNotas();
