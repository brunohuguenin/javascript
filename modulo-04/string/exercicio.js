// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let valorTaxa = 0;
let valorRecebimento = 0;
transacoes.forEach((item) => {
  const valor = Number(item.valor.replace('R$', ''));
  if (item.descricao.slice(0, 3) == 'Tax') {
    valorTaxa += valor;
  } else {
    valorRecebimento += valor;
  }
});
console.log(valorTaxa);
console.log(valorRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesArray = transportes.split(';');

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo = html.split('span').join('a');
console.log(htmlNovo);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let soma = 0;
transacoes2.forEach((item, index) => {
  if (item.toLocaleLowerCase().trim().slice(0, 4) == 'taxa') {
    soma++;
  }
});
console.log(`O total de itens que contem Taxa é ${soma}`);
