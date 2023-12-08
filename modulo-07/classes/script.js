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
