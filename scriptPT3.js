const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Questao 1
const addTurno = (lesson2) => {
  const adicionar = lesson2.turno = 'Noite';
  return adicionar
}

addTurno(lesson2)

console.log(lesson2);


//Questao 2

const listar = (lesson1) => {
  const listando = Object.keys(lesson1);

  console.log(listando);
}
listar(lesson1);


//Questao 3

const tamanho = (lesson1) => {
  const tamanhos = Object.keys(lesson1).length;
  console.log(tamanhos);
}
tamanho(lesson2)


//Questao 4
const valores = (lesson3) => {
  const valor = Object.values(lesson3);
  console.log('Questao 4'(valor));
}

tamanho(lesson3)

//Questao 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

//Questao 6
const alunos = (allLessons) => {
  let total = 0;

  const quantidades = Object.keys(allLessons);

  for (index in quantidades) {
    total += allLessons[quantidades[index]].numeroEstudantes;
  }
  console.log(total)
}
alunos(allLessons);
