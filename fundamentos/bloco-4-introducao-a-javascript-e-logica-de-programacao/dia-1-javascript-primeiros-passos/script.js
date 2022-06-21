let a = 2;
let b = 3;
let c = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
}

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}

const valor = 0;

if (valor > 0) {
    console.log('Positivo');
}
else if (valor < 0) {
    console.log('Negativo');
}
else {
    console.log('zero');
}

const valor1 = 60;
const valor2 = 60; 
const valor3 = 60;

if (valor1 || valor2 || valor3 < 0) {
    console.log('Insira um valor maior que zero!');
}
else {

}

if (valor1 + valor2 + valor3 === 180) {
    console.log('triangulo!');
}
else{
    console.log('nao e um triangulo');
}