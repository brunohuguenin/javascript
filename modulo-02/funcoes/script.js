function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(8);

const soma = (a, b) => {
  return a + b;
};

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(85, 1.8));

addEventListener('click', function () {
  console.log('Clicou');
});

function terceiraIdade(idade) {
  if (typeof idade !== Number) {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('valeu'));

function dados() {
  var nome = 'Bruno';
  var idade = 25;
  function outrosDados() {
    var endereço = 'Rio de Janeiro';
    var bairro = 'Paciência';
    return `${nome}, ${idade}, ${endereço}, ${bairro}`;
  }
  return outrosDados;
}

console.log(dados());
