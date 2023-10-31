// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor) {
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(9));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Bruno', 'Huguenin'));

// Crie uma função que verifica se um número é par
const isPar = (valor) => {
  if (valor % 2 == 0) {
    return `O número ${valor} é PAR`;
  } else {
    return `O número ${valor} é NÃO É PAR!`;
  }
};

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
const tipoDeDado = (dado) => {
  return typeof dado;
};

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  var nome = 'Bruno Huguenin Messias';
  return console.log(nome);
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
