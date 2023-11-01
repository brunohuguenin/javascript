// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('[src^="img/imagem"]');
console.log(img);

//Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDesc = document.querySelector('.animais-descricao h2');

console.log(animaisDesc);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const ultimoP = paragrafos[paragrafos.length - 1];
console.log(ultimoP.innerText);
