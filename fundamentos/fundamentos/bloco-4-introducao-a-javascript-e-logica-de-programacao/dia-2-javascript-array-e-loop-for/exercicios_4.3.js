// Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.
// 
//2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3.
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração  que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova. (editado) 

//Quesntao 1
let inicio = 35;
let final = 105;
let soma = 0

for (let index = inicio; index <= 105; index += 1) {
    soma = soma + index
}
console.log('A soma de 35 a 105 e:', soma);

//Questao 2
let contador = [];
let inicio1 = 15;
let final1 = 155;

for (let index = inicio1; index <= final1; index += 1) {
    if (index % 3 === 0) {
        contador += 1;
    }
}
if (contador >= 50) {
    console.log('SE LIGUE QUE TEM!');
}

//Questao 3
//"Jogador 1 vence" ou "Empate" ou "Jogador 2 vence". 

let jogador1 = 'scissors';
let jogador2 = 'stone';

if (jogador1 == 'paper' && jogador2 == 'stone') {
    console.log('Jogador 1 vence');
} else if (jogador1 == 'stone' && jogador2 == 'scissors') {
    console.log('Jogador 1 vence');
} else if (jogador1 == 'scissors' && jogador2 == 'paper') {
    console.log('Jogador 1 vence');
} else if (jogador1 == jogador2) {
    console.log('Empate');
} else {
    console.log('Jogador 2 vence');
}


// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade" ou "A pessoa é menor de idade".
// Bônus: Crie a condição utilizando operador ternário.

let idade = 20;
let saida;
​
//Com if/else
if (idade >= 18) {
        saida = 'maior de idade';
    } else {
        saida = 'menor de idade';
    };
console.log('A pessoa é ' + saida);

//Com operador ternário
console.log(idade >= 18 ? 'A pessoa é maior de idade' : 'A pessoa é menor de idade');

// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let idadeAdemar = 10;
let idadeAdriana = 11;
let idadeJulia = 29;

if (idadeAdemar < idadeAdriana && idadeAdemar < idadeJulia) {
    console.log('Ademar é o mais novo')
}
else if (idadeAdriana < idadeAdemar && idadeAdriana < idadeJulia) {
    console.log('Adriana é a mais nova')
} else {
    console.log('Julia é a mais nova')
}
