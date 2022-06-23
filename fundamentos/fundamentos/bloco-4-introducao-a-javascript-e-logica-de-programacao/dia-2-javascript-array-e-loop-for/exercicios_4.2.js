let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Questao 1
for (index in numbers) {
    console.log(numbers[index]);
}

//Questao 2
let soma = 0;
for (let valor of numbers) {
    soma += valor
}
console.log('Soma dos inteiros', soma);

//Questao 3
console.log('Media:', (soma / 10));

//Questao 4
let media = soma / 10;
if (media > 20) {
    console.log('Valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}

//Questao 5
let max = numbers[0];

for (let maximo = 1; maximo < numbers.length; maximo += 1) {
    if (numbers[maximo] > max) {
        max = numbers[maximo]
    }
}

console.log(max);

//Questao 6
let impar = 0;

for (let x = 0; x < numbers.length; x += 1) {
  if (numbers[x] % 2 !== 0) {
    impar += 1;
  }
}

if (impar === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(impar);
}

//Questao 7
let mim = numbers[0];

for (let minimo = 101; minimo < numbers.length; minimo -= 1) {
    if (numbers[minimo] > mim) {
        mim = numbers[minimo]
    }
}

console.log(mim);

//Questao 8
let numeros = [];
for (let array = 1; array <=25; array += 1) {
  numeros.push(array)
}
console.log(numeros)

//Questao 9
for (let divisao = 0; divisao < numeros.length; divisao += 1) {
  console.log(numeros[divisao] / 2)
}