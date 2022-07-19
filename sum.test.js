//Questao 1

const sum = require("./sum");

describe('Teste da questao 1 com sum()', () => {
    it('Testa se o retorno de sum(4, 5) e 9', () => {
        expect(sum(4, 5)).toBe(9)
    });

    it('Testa se o retorno de sum(0, 0) e 0', () => {
        expect(sum(0, 0)).toBe(0)
    });

    it('Testa se retorna um erro quando os para,etros sao 4 e "5"', () => {
        expect(() => sum(4, `5`)).toThrowError();
        expect(() => sum(4, `5`)).toThrowError("parameters must be numbers");
    });
});

