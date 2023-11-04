function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 50000;

const bmw = new Carro();
bmw.marca = 'BMW';
bmw.preco = 70000;

console.log(Carro.prototype);
console.log(honda);
console.log(bmw);

function Carro2(marcaAtribuida, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marcaAtribuida = marcaAtribuida;
  this.precoInicial = precoFinal;
}

const mercedes = new Carro2('Mercedes', '100000');

console.log(mercedes);
