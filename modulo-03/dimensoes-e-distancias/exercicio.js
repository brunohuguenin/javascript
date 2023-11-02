// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const distTopo = img.offsetTop;
console.log(distTopo);

// Retorne a soma da largura de todas as imagens
const imagens = document.querySelectorAll('img');

var soma = 0;
for (var i = 0; i < imagens.length; i++) {
  soma += imagens[i].offsetWidth;
}
console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item) => {
  const widthLinks = item.offsetWidth;
  const heightLinks = item.offsetHeight;
  if (widthLinks >= 48 && heightLinks >= 48) {
    console.log(item, ' Possui acessibilidade');
  } else {
    console.log(item, ' NÃO possui acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
