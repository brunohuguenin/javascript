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
