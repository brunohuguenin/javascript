function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
};

const bruno = new Pessoa('Bruno', 25);
console.log(bruno.prototype);

const carro = {
  marca: 'Honda',
  preco: 200,
  ano: 2002,
  acelerar() {
    return 'carro acelerou';
  },
};
