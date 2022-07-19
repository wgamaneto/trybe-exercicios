const isNumber = require('../src/isNumber.js');

describe('Testa se o tipo de dado do parâmetro é um número', () => {
  it('Retorna `true` se passar um número como parâmetro da função', () => {
    expect(isNumber(21)).toBeTruthy();
  });
  it('Retorna `false` se passar uma string como parâmetro da função', () => {
    expect(isNumber(String)).toBeFalsy();
  });
  it('Retorna `false` se passar uma array como parâmetro da função', () => {
    expect(isNumber(Array)).toBeFalsy();
  });
  it('Retorna `false` se passar um objeto como parâmetro da função', () => {
    expect(isNumber(Object)).toBeFalsy();
  });
});
