const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]('Ford');
dados[1][2].cor; // azul

const carros = ['focus', 'mustang', 'cerato'];
carros.unshift('mercedes', 'sonata');
carros.push('city', 'civic', 'corola');

carros.pop();
carros.shift();
//console.log(carros);

carros.reverse();
//console.log(carros);

carros.splice(2, 2, 'onix', 'siena');
//console.log(carros);

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

const transportes1 = ['carro', 'trem'];
const transportes2 = ['avião', 'moto', 'barco'];

const meiosDeTransportes = [].concat(transportes1, transportes2, 'van', 'uber');

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.lastIndexOf('js'));
console.log(linguagens.includes('php'));

const cloneLinguagens = linguagens.slice(2, 4);
console.log(cloneLinguagens);
