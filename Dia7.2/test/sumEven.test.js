const sumEven = require('../src/sumEven.js');

describe('Soma de números pares que vem no array', () => {
  it('Retorne a soma de todos os números pares', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sumEven(arr)).toEqual(30);
  });
  it('Retorne `0` se o array não tenha ao menos um número par', () => {
    const arr = [1, 3, 5, 7, 9, 11];
    expect(sumEven(arr)).toEqual(0);
  });
  it('Retorne `0` se o arâmetro da função estiver vazio', () => {
    expect(sumEven()).toEqual(0);
  });
});
