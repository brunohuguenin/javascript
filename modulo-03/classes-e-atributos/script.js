const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');

if (menu.classList.contains('teste')) {
  menu.classList.remove('teste');
  menu.classList.remove('ativo');
}

const animais = document.querySelector('.animais');
console.log(animais.attributes[1]);

const img = document.querySelector('img');
console.log(img.getAttribute('alt'));
console.log(img.getAttribute('src'));
img.setAttribute('alt', 'É uma raposa');

const possuAlt = img.hasAttribute('alt');
console.log(possuAlt);
