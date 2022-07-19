const shoppingList = require('../src/shoppingList.js');

describe('Teste se um elemento é adicionado a um array', () => {
  it('adicionando "refrigerante de laranja" a lista de compra', () => {
    expect(shoppingList("refrigerante de laranja")).toContain("refrigerante de laranja")
  });

  it('adicionando "filé de peixe" a lista de compra', () => {
    expect(shoppingList('filé de peixe')).toContain('filé de peixe');
  });

  it('adicionando "farinha de trigo" a lista de compra', () => {
    expect(shoppingList("farinha de trigo")).toContain("farinha de trigo");
  });
  it('retorna a lista com 5 itens quando não tem parâmetro', () => {
    const itens = [
      'suco de maracujá',
      'maçã',
      'sacos de lixo',
      'papel toalha',
      'leite',
    ];
    expect(shoppingList()).toEqual(itens);
  });
});
