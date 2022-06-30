function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Questao 1
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMes() {
    const dias = document.querySelector('#days');

    for (index of decemberDaysList) {
        let dia = decemberDaysList[index];
        let listaDia = document.createElement('li');
        listaDia.innerHTML = dia;

        if (dia === 24 || dia === 31) {
            listaDia.classList = 'feriados';
            dias.appendChild(listaDia);
        }
        else if (dia === 4 || dia === 11 || dia === 18) {
            listaDia.classList = 'sextas';
            dias.appendChild(listaDia);
        }
        else if (dia === 25) {
            listaDia.classList = 'feriado e sexta'
        }
        else {
            listaDia.classList = 'diaNormal';
            dias.appendChild(listaDia);
        }
    }

}
diasDoMes()

//Questao 2
function botaoFeriado(botao) {
    let botaoContainer = document.querySelector('.buttons-container');
    let novoBotao = document.createElement('button');
    let botaoId = 'btn-holiday';

    novoBotao.innerHTML = botao;
    novoBotao.id = botaoId;

    botaoContainer.appendChild(novoBotao);
}
botaoFeriado('Feriados');

//Questao 3
function mudarCorFeriado() {
    let selecionarBotao = document.querySelector('#btn-holiday');
    let seleciogarFeriados = document.querySelectorAll('.holiday');
    
    let cor = 'rgb(238,238,238)';
    let corNormal = 'white';

    selecionarBotao.addEventListener('click', function () {
        for (index of seleciogarFeriados) {
            if (seleciogarFeriados[index].style.backgroundColor === corNormal) {
                seleciogarFeriados[index].style.backgroundColor = cor;
            }
            else {
                seleciogarFeriados[index].style.backgroundColor = corNormal;
            }
        }
    });
}
mudarCorFeriado();