const comida = 'Pizza';
const liquido = new String('Agua');

const frase = 'A melhor comida é Pizza';
console.log(comida[comida.length - 1]);

const frase2 = ' de frango com catupiry e ovos com bacon';

console.log(frase.concat(frase2));

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

console.log(listaFrutas.lastIndexOf('j'));

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....

const repete = 'valeu, natalina ';
console.log(repete.repeat(3));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
//const htmlArray = htmlText.split('div');
//const htmlNovo = htmlArray.join('section');

const altera = htmlText.split('div').join('section');
