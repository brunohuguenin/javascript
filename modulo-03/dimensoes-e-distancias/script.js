// const listaAnimais = document.querySelector('.animais-lista');

// console.log(listaAnimais.clientHeight);
// console.log(listaAnimais.scrollHeight);

// const animaisTopo = listaAnimais.offsetTop;
// console.log(animaisTopo);

// const primeiroH2 = document.querySelector('h2');
// const rect = primeiroH2.getBoundingClientRect();
// console.log(rect);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.scrollY,
  window.scrollX,
);

const small = window.matchMedia('(max-width: 600px)').matches;
if (small) {
  console.log('Usuário Mobile');
}
