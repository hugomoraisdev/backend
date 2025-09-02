function calcularMediaAluno(a1, a2, a3) {
  // Validações iniciais
  if (a1 === undefined || a2 === undefined) {
    throw new Error('Notas a1 ou a2 não informadas');
  }
  if (a1 < 0 || a2 < 0) {
    throw new Error('Notas a1 ou a2 não podem ser negativas');
  }

  // Caso não haja a3 → cálculo base
  if (a3 === undefined) {
    return a1 * 0.4 + a2 * 0.6;
  }

  if (a3 < 0) {
    throw new Error('Nota a3 não pode ser negativa');
  }

  // Regra final: escolher a melhor média
  const mediaComA1 = a1 * 0.4 + a3 * 0.6;
  const mediaComA2 = a2 * 0.4 + a3 * 0.6;
  const mediaBase = a1 * 0.4 + a2 * 0.6;

  return Math.max(mediaBase, mediaComA1, mediaComA2);
}

module.exports = { calcularMediaAluno };