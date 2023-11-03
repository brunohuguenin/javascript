// const img = document.querySelector('img');

// img.addEventListener('click', () => {
//   console.log('Clicou hehe!');
// });

// const titulo = document.querySelector('h1');

// const handleClick = () => {
//   alert('Clicou no Título');
// };

// titulo.addEventListener('click', handleClick);

// const imagensAnimais = document.querySelector('.animais-lista');

// const callbackLista = (event) => {
//   console.log(event.currentTarget); // bloco PAI
//   console.log(event.target); // alvo clicado
// };

// imagensAnimais.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// const clicouLink = (event) => {
//   event.preventDefault();
//   console.log('Clicou here');
// };

// linkExterno.addEventListener('click', clicouLink);

const imgs = document.querySelectorAll('img');

const handleImg = (event) => {
  console.log(event.target);
};

imgs.forEach((item) => {
  item.addEventListener('click', handleImg);
});
