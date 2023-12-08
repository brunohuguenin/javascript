// function Button(text, bacground) {
//   this.text = text;
//   this.background = bacground;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
// }

// const blueButton = new Button('Submit', 'blue', 'white');

// console.log(blueButton.appendTo('body'));

// class Button {
//   constructor(text) {
//     this.text = text;
//   }
//   static create(background) {
//     const elementButton = document.createElement('button');
//     elementButton.style.background = background;
//     elementButton.innerText = 'Clique';
//     return elementButton;
//   }
// }

// const blueButton = Button.create('blue');

// class Button {
//   constructor(text, background) {
//     this.text = text;
//     this.background = background;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue');

const button = {
  get element() {
    return this._element;
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  },
};

button.element = 'button'; // SET
button.element; // GET

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = 'Banana';
frutas.nova = 'Laranja';
frutas.nova = 'Melância';

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');
