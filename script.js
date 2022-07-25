const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Questao 1
const info = () => {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

console.log(info(books));


//Questao 2
const objetosArr = () => {
  return books.map((book) => ({ author: book.author.name, age: book.releaseYear - book.author.birthYear })).sort((a, b) => a.age - b.age)
}
console.log(objetosArr(books));


//Questao3
const filtrarGenero = () => {
  return books.filter((filtro) => filtro.genre === 'Ficção Científica' || filtro.genre === 'Fantasia')
}

console.log(filtrarGenero(books));


//Questao 4
const idadeLivros = () => {
  return books.filter((idade) => 2022 - idade.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear)
}
console.log(idadeLivros(books));


//Questao 5
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

const autores = () => {
  const generos = ['Fantasia', 'Ficção Científica'];
  return expectedResult.filter((book) => generos.includes(book.genre)).map((book) => book.author.name).sort();
}
console.log(autores(books));