const carro = {
  marca: 'Ford',
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const ul = new Dom('ul');

ul.ativo('ativo');

console.log(ul);
