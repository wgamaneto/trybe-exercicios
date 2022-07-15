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

//Questao 4 - funcao 1
const substituir = (nome) => {
    const frase = 'Tryber x aqui!'
    const novaFrase = frase.split(' ');
    for (i = 0; i < novaFrase.length; i += 1) {
        if (novaFrase[i] === 'x') {
            novaFrase[i] = nome
            // console.log(novaFrase);
        }
    }
    return novaFrase.join(' ');
};


// // Alternativa?
// const substituir = (nome) => {
//     const frase = 'Tryber x aqui!'
//     const novaFrase = frase.split(' ').replace('x', nome);
//     return novaFrase.join(' ')
// }
// console.log(substituir('ximboca'));


// Funcao 2
const fraseHabilidades = (evento) => {
    const skills = ['JavaScript', 'HTML', 'CSS']
    let frases = `Ola, ${evento}
Minhas principais habilidades sao: 
${skills}`
    return frases
}
console.log(fraseHabilidades(substituir('ximboca')));