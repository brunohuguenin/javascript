function perimetroForma(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}

console.log(perimetroForma(10, 3));

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + ' ganhou um ' + premio);
  });
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Beterraba', 'Batata'];

const comidas = [...frutas, 'Pizza', 'Hamburgue', legumes];

console.log(comidas);
