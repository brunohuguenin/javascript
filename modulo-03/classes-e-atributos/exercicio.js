// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if (index !== 0) item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  const possuiAlt = item.hasAttribute('alt');
  console.log(possuiAlt);
});

// Modifique o href do link externo no menu
const li = document.querySelector('a[href^="http"]');
li.setAttribute('href', 'https://google.com');
