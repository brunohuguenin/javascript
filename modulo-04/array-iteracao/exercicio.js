// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const sections = document.querySelectorAll('.curso');
const arrayCurso = Array.from(sections);

const cursos = arrayCurso.map((section) => {
  const titulo = section.querySelector('h1').innerText;
  const descricao = section.querySelector('p').innerText;
  const aulas = parseInt(section.querySelector('.aulas').innerText);
  const horas = parseInt(section.querySelector('.horas').innerText);

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(cursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQ100 = numeros.filter((item, index) => {
  if (item > 100) {
    return item;
  }
});
console.log(maiorQ100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const buscaBaixo = instrumentos.some((baixo) => {
  return baixo === 'Baixo';
});
console.log(buscaBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const valorTotal = compras.reduce((acc, item, index) => {
  const precoLimpo = Number(item.preco.replace('R$ ', '').replace(',', '.'));

  return acc + precoLimpo;
}, 0);

console.log(valorTotal);
