// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = getComputedStyle(btn);

console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
let aux;
// aux = cursoAtivo;
// cursoAtivo = cursoInativo;
// cursoInativo = aux;
// console.log(cursoAtivo, cursoInativo);
// ----- OU USANDO DESTRUTURAÇÃO

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};

const { cor = 'verde' } = cachorro;

console.log(cor);
