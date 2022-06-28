//Questao 1
let array = [1 ,2 ,3, 4, 5];

let numero = 4
for (index = 0; index < array.length; index += 1) {
    if (array[index] === 4) {
        console.log('Esta na posicao:', index);
    } 
    else {
    console.log('Elementos nao encontrado no array');
}
}

//Questao 2
let impar = [];

for (let index = 1; index <= 50; index += 1) {
    if (index % 2 !== 0) {
        impar.push(index)
    }
}
console.log(impar.toString());

//Questao 3
let sequencia = [];
let inicio = 1;
let final = 150;

for (let divisivel = inicio; divisivel <= final; divisivel += 1) {
    if (divisivel % 3 == 0) {
        sequencia.push(divisivel);
    }
}
if (sequencia.length >= 50) {
    console.log('Mais de cinquenta numeros');
}
else {
    console.log('Sequencia muito pequena');
}
console.log(sequencia.length);
