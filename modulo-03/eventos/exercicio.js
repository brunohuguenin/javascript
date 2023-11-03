// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

const handleClick = (event) => {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });

  event.currentTarget.classList.add('ativo');
};
linksInternos.forEach((element) => {
  element.addEventListener('click', handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll('body *');

// const handleElemento = (event) => {
//   console.log(event.currentTarget);
// };

// todosElementos.forEach((elementos) => {
//   elementos.addEventListener('click', handleElemento);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos = document.querySelectorAll('body *');

// const handleElemento = (event) => {
//   event.preventDefault();
//   console.log(event.target.remove());
// };

// todosElementos.forEach((elementos) => {
//   elementos.addEventListener('click', handleElemento);
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const hendleKey = (event) => {
  if (event.key === 't') {
    // doc. = body --- docElement = html
    document.documentElement.classList.toggle('textoMaior');
  }
};

window.addEventListener('keydown', hendleKey);
