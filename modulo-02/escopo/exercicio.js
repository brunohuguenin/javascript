// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(cor, marca, portas); // as variáveis 'marca' e 'portas' não são acessadas fora do bloco

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  // a variável 'dois' só existe na função 'somarDois()'
  const dois = 2;
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// basta trocar a variável 'var numero' por 'let numero'
const total = 10 * numero;
console.log(total);
