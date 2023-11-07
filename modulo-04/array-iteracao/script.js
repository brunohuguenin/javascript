// // const carros = ['Ford', 'Fiat', 'Honda'];

// // // carros.forEach((item, index, array) => {
// // //   console.log(' -- ' + item.toUpperCase());
// // // });

// // const li = document.querySelectorAll('ul li');
// // li.forEach((item) => {
// //   item.classList.add('ativo');
// // });

// // const retornoCarros = carros.map((item) => {
// //   const alteraItem = ' -- ' + item.toUpperCase();
// //   return alteraItem;
// // });
// // // console.log(carros);
// // // console.log(retornoCarros);

// // const aulas = [
// //   {
// //     nome: 'HTML 1',
// //     min: 15,
// //   },
// //   {
// //     nome: 'HTML 2',
// //     min: 10,
// //   },
// //   {
// //     nome: 'CSS 1',
// //     min: 20,
// //   },
// //   {
// //     nome: 'JS 1',
// //     min: 25,
// //   },
// // ];

// // const tempoAula = aulas.map((aula) => aula.min);

// // const numeros = [14, 25, 21, 40, 145, 19, 14, 15, 36, 88];

// // let somatorioNum = 0;
// // numeros.map((item) => {
// //   return (somatorioNum += item);
// // });
// // console.log(somatorioNum);

// // const soma = numeros.reduce((acumulador, numero) => {
// //   return acumulador + numero;
// // }, 0);

// // console.log(soma);

// // const maiorValor = numeros.reduce((anterior, atual) => {
// //   return anterior < atual ? atual : anterior;
// // });

// // console.log(maiorValor);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15,
//   },
//   {
//     nome: 'HTML 2',
//     min: 10,
//   },
//   {
//     nome: 'CSS 1',
//     min: 20,
//   },
//   {
//     nome: 'JS 1',
//     min: 25,
//   },
// ];

// const maiorTempo = aulas.reduce((acumulador, atual, index) => {
//   if (atual.min > 20) {
//     acumulador[index] = atual;
//   }
//   return acumulador;
// }, {});

// console.log(maiorTempo);

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const includUva = frutas.map((item, index) => {
//   if (item === 'Uva') {
//     return index;
//   }
// });
// console.log(includUva);

// const temUva = frutas.some((fruta) => {
//   return fruta === 'Uva';
// });
// console.log(temUva);

const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
}); // 2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find((x) => x > 45); // 88
