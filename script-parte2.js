// // Questao 1
// const fatorial = (numero) => numero > 1 ? numero * fatorial(numero - 1) : 1;
// console.log(fatorial(7));

// // Qustao 2
// const maiorPalavra = (texto) => texto.split(' ').sort((a, b) => b.length - a.length)[0];

// console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'));

//Questao 3
const contagem = document.getElementById('contadorClicks');
let click = 0

contagem.addEventListener('click', () => {
    click += 1;
    console.log(click);
})
