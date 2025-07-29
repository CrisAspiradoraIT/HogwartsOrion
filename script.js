// Hogwarts Orion - Contador de líneas de 35 caracteres

const LINESIZE = 35;

function contarBloques(text) {
  // Quita todos los saltos de línea para contar solo por caracteres
  const limpio = text.replace(/\r?\n/g, '');
  if (!limpio.trim()) return 0;
  return Math.ceil(limpio.length / LINESIZE);
}

function dividirEnBloques(text) {
  const limpio = text.replace(/\r?\n/g, '');
  let bloques = [];
  for (let i = 0; i < limpio.length; i += LINESIZE) {
    bloques.push(limpio.substring(i, i + LINESIZE));
  }
  return bloques;
}

function formatText() {
  const inputText = document.getElementById('inputText').value;
  const outputDiv = document.getElementById('outputText');
  outputDiv.innerHTML = '';
  if (!inputText.trim()) {
    outputDiv.innerHTML = '<p style="color: #777; text-align: center;">Por favor, ingresa algún texto para formatear.</p>';
    document.getElementById('blockLinesText').innerText = `Bloques de 35 caracteres: 0`;
    return;
  }
  const bloques = dividirEnBloques(inputText);
  bloques.forEach((bloque, i) => {
    const div = document.createElement('div');
    div.className = 'line';
    const numSpan = document.createElement('span');
    numSpan.className = 'line-number';
    numSpan.textContent = (i + 1) + '.';
    const textSpan = document.createElement('span');
    textSpan.className = 'line-text';
    textSpan.textContent = bloque;
    div.appendChild(numSpan);
    div.appendChild(textSpan);
    outputDiv.appendChild(div);
  });
  document.getElementById('blockLinesText').innerText = `Cantidad de lineas: ${bloques.length}`;
}

// Actualizar automáticamente el contador al escribir
document.getElementById('inputText').addEventListener('input', () => {
  const inputText = document.getElementById('inputText').value;
  document.getElementById('blockLinesText').innerText = `Bloques de 35 caracteres: ${contarBloques(inputText)}`;
});

// Botón pegar del portapapeles
document.getElementById('pegarBtn').addEventListener('click', async () => {
  try {
    const texto = await navigator.clipboard.readText();
    if (texto) {
      document.getElementById('inputText').value = texto;
      document.getElementById('blockLinesText').innerText = `Bloques de 35 caracteres: ${contarBloques(texto)}`;
    } else {
      alert('No se encontró texto en el portapapeles.');
    }
  } catch (err) {
    alert('No se pudo acceder al portapapeles. Da permiso al navegador y usa HTTPS.');
    console.error('Error al pegar el texto: ', err);
  }
});
