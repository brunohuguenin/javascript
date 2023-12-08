// Remova o erro
const priceNumber = (n) => Number(n.replace('R$', '').replace(',', '.'));
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function dobra(num) {
  return console.log(2 * num);
});

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();
