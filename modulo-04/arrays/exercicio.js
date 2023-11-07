const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const firstItem = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const lastItem = comidas.pop();

// Adicione 'Arroz' ao final da array
const addLastItem = comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array
const addInFrontOf = comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const sortStudents = estudantes.sort();

// Inverta a ordem dos estudantes
const reverseStudents = estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); // yes

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')); // No

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
const newHtml = html.split('section').join('ul').split('div').join('li');
console.log(newHtml);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
carros.pop();
