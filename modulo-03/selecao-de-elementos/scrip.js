const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// elementos html colections atualizam os elementos ao-vivo
console.log(gridSectionHTML);
console.log(gridSectionNode);
