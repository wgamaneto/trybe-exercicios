# Teste Unitário

Esse repositório tem como objetivo treinar a criação de testes unitários para funções já implementadas.

[Documentação Jest](https://jestjs.io/docs/getting-started)

**Obs:** Cada teste tem uma linha que é `fail('Remova essa linha e escreva seu teste aqui');`, para seu teste funcionar, essa linha precisa ser removida ou comentada ;).

Cada função implementada está em um arquivo com seu nome na pasta `src`, os arquivos de testes já foram criados e estão na pasta `test`.

# isEven

Essa função recebe um número como parâmetro e faz uma validação se o número é ou não par, retornando uma string.

**O que será avaliado**

- Escreva um teste se quando a função é chamada `isEven(2)`, retorna a string "esse valor é par";
- Escreva um teste se quando a função é chamada `isEven(3)`, retorna a string "esse valor é ímpar";

**Exercício 2:** Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares. Se nenhum número for par, ou o array for vazio a soma deve ser zero. ( dica: já fizemos uma função que verificar se o número é par)

**Exercício 3:** Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.

**Exercício 4:** Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter.

**Exercício 5:** Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo \* gravidade. Considere a gravidade constante de 9.8.

**Exercício 6:** Utilizando operadores ternários e arrow functions reescreva a seguinte função:

```javascript
function isZero(number) {
  if (number === 0) {
    return 'Zero';
  }
  return 'Not zero';
}
```

**Exercício Bônus:** Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1.
