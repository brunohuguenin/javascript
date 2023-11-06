const ano = 2018;
const nome = 'Bruno';
console.log(isNaN(nome));

console.log(Number.parseFloat('99.50', 10));

const preco = 10.47;
console.log(+preco.toFixed());

const precoBR = preco.toLocaleString('pt-br', {
  style: 'currency',
  currency: 'brl',
});
console.log(precoBR);

const aleatorio = Math.floor(Math.random() * 100);
