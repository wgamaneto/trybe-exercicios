// //Questao 1
// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     console.log("Returned planet: ", mars);
//   };

//   setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// //Questao 2
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature = () => {
//     const enviarTemperatura = getMarsTemperature();
//     setTimeout(() => {
//       console.log(`A temperatura de Marte é: ${enviarTemperatura} graus celsius`), messageDelay()
//     });
// };

// sendMarsTemperature()

// //Questao 3
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

//   const sendMarsTemperature = (elemento) => {
//     const enviarTemperatura = getMarsTemperature();
//     setTimeout(() => {
//       elemento(enviarTemperatura) , messageDelay()
//     });
// };

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// //Questao 4
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (elemento, erro) => {
//   const enviarTemperatura = getMarsTemperature();
//   const chanceDeEnvio = Math.random() <= 0.6;

//   setTimeout(() => {
//     if (chanceDeEnvio) {
//       elemento(enviarTemperatura)
//     } else{
//       erro('Deu ruim');
//     } 
//     messageDelay()});
// };

// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

//Questao 5
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('testa caixa alta', (done) => {
  uppercase('ximboca', (elemento) => {
    expect(elemento).toBe('XIMBOCA');
    done();
  });
});