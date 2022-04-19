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

# sumEven

A função recebe um array de números por parâmetro e faz a soma de todos os números pares.

_dica:_ Já fizemos uma função que verifica se o número é par;

**O que será avaliado**

- Retorne a soma de todos os números pares passado no array como parâmetro da função;
- Retorne `0` se o array não tenha ao menos um número par;
- Retorne `0` se o parâmetro da função estiver vazio;

# isNumber

A função recebe um parâmetro como argumento e faz uma validação se seu tipo de dado é ou não um número;

- Retorna `true` se passar um número como parâmetro da função;
- Retorna `false` se passar uma string como parâmetro da função;
- Retorna `false` se passar uma array como parâmetro da função;
- Retorna `false` se passar um objeto como parâmetro da função;

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
