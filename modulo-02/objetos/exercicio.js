// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoas = {
  nome: 'Bruno',
  sobreNome: 'Huguenin',
  profissao: 'Militar',
  idade: 25,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobreNome}`;
  },
};
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoas.nomeCompleto = function () {
  return `${this.nome} ${this.sobreNome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raça: 'labrador',
  cor: 'preto',
  idade: 10,
  latir: function (pessoa) {
    if (pessoa == 'homem') return 'cachorro latiu';
    else {
      return 'cachorro não latiu';
    }
  },
};
