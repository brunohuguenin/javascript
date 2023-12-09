// const carro = {
//   marca: 'Honda',
//   ano: 2018,
// };

// // const marca = carro.marca;
// // const ano = carro.ano;

// const { marca, ano } = carro;

// const cliente = {
//   nome: 'Bruno',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2', 'Livro 3'],
//       videos: ['Vídeo JS', 'Vídeo HTML', 'Vídeo CSS3'],
//     },
//     fisicos: ['Caderno 1', 'Notebook'],
//   },
// };

// // console.log(cliente.compras.digitais.livros);
// // console.log(cliente.compras.digitais.videos);

// // o que está entre as chaves, são variáveis
// const { livros, videos } = cliente.compras.digitais;
// const { nome } = cliente;
// const { compras } = cliente;
// console.log(livros[2]);
// console.log(videos[1]);
// console.log(nome);
// console.log(compras);

const cliente = {
  nome: 'Andre',
  compras: 10,
};

const { nome, compras, email = 'email@gmail.com', cpf } = cliente;
console.log(email); // email@gmail.com
console.log(cpf); // undefined

function handleKeyUp({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyUp);
