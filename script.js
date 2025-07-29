// Cuenta líneas según bloques de 35 caracteres
const textarea = document.getElementById('textArea');
const lineCount = document.getElementById('lineCount');

function contarLineas(texto, charsPorLinea = 35) {
  // Quita saltos de línea, cuenta solo caracteres
  const chars = texto.replace(/\r?\n/g, '');
  if (chars.length === 0) return 0;
  return Math.ceil(chars.length / charsPorLinea);
}

textarea.addEventListener('input', () => {
  const texto = textarea.value;
  lineCount.textContent = contarLineas(texto);
});
