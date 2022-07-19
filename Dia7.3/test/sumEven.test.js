const sumEven = require('../src/sumEven.js');

describe('Soma de números pares que vem no array', () => {
  it('Retorne a soma de todos os números pares', () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(sumEven(numeros)).toEqual(30);
  });
  it('Retorne `0` se o array não tenha ao menos um número par', () => {
    const numeros = [1, 3, 5, 7, 9];
  expect(sumEven(numeros)).toEqual(0);
  });
  it('Retorne `0` se o parâmetro da função estiver vazio', () => {
    const numeros = [];
  expect(sumEven(numeros)).toEqual(0);
  });
});
