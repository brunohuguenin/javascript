var pessoa = {
  nome: 'Bruno',
  idade: 28,
  profissao: 'Militar',
  possuiFaculdade: 'Cusando',
};

console.log(pessoa.possuiFaculdade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

var menu = {
  width: 800,
  height: 50,
  backGroundColor: '#84E',
};

menu.backGroundColor = '#000';
menu.color = '#fff';
var bg = menu.backGroundColor;

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60
