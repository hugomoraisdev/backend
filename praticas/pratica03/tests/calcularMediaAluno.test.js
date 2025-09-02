const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test('calcularMediaAluno deve estar definido', () => {
  expect(calcularMediaAluno).toBeDefined();
});

test('deve lançar erro se a1 ou a2 não forem informados', () => {
  expect(() => calcularMediaAluno(undefined, 5)).toThrow('Notas a1 ou a2 não informadas');
  expect(() => calcularMediaAluno(7, undefined)).toThrow('Notas a1 ou a2 não informadas');
});

test('deve lançar erro se a1 ou a2 forem negativos', () => {
  expect(() => calcularMediaAluno(-1, 5)).toThrow('Notas a1 ou a2 não podem ser negativas');
  expect(() => calcularMediaAluno(7, -2)).toThrow('Notas a1 ou a2 não podem ser negativas');
});

test('deve calcular média base quando a3 não é informada', () => {
  const resultado = calcularMediaAluno(8, 6);
  expect(resultado).toBeCloseTo(8 * 0.4 + 6 * 0.6);
});

test('deve lançar erro se a3 for negativa', () => {
  expect(() => calcularMediaAluno(7, 6, -1)).toThrow('Nota a3 não pode ser negativa');
});

test('deve usar a melhor combinação: a1 + a3', () => {
  // Se a1=5, a2=2, a3=9 → melhor média é com a1 e a3
  const resultado = calcularMediaAluno(5, 2, 9);
  expect(resultado).toBeCloseTo(5 * 0.4 + 9 * 0.6);
});

test('deve usar a melhor combinação: a2 + a3', () => {
  // Se a1=3, a2=7, a3=9 → melhor média é com a2 e a3
  const resultado = calcularMediaAluno(3, 7, 9);
  expect(resultado).toBeCloseTo(7 * 0.4 + 9 * 0.6);
});
