// Cuenta líneas reales, según saltos de línea en el textarea
const textarea = document.getElementById('textArea');
const lineCount = document.getElementById('lineCount');

function contarLineas(texto) {
  if (texto.length === 0) return 0;
  // Divide por saltos de línea y cuenta los fragmentos resultantes
  return texto.split(/\r\n|\r|\n/).length;
}

textarea.addEventListener('input', () => {
  const texto = textarea.value;
  lineCount.textContent = contarLineas(texto);
});
