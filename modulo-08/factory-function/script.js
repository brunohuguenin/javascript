// function creatButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element,
//   });
// }

// const btnComprar = creatButton('Comprar');
// const btnVender = creatButton('Vender');

// btnComprar.text = 'Novo texto';
// btnComprar.element = 'Novo texto';

// console.log(btnComprar, btnVender);

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }
  console.log(this);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = new Pessoa('Bruno');

console.log(designer);
