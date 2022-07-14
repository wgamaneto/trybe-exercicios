// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// Questao 1
  const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
        console.log(ifScope);
    }
    else {
        const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
    }
  }
  testingScope(true);

  //Questao 2
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a, b) => {
    return a - b;
  });

  console.log(`Os numeros ${oddsAndEvens} se encontram ordenados em forma crescente!`); // será necessário alterar essa linha 😉