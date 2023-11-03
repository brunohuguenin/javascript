const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML;
//h1.innerText;
// console.log(h1);
// console.log(animaisLista.innerText);

h1.innerText = 'Novo Título da Página';

const lista = document.querySelector('.animais-lista');

//console.log(lista.parentElement); // pai
//console.log(lista.parentElement.parentElement); // pai do pai
//console.log(lista.previousElementSibling); // elemento acima
//console.log(lista.nextElementSibling); // elemento abaixo

//console.log(lista.children); // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
//console.log(lista.children[--lista.children.length]); // último filho

//lista.querySelectorAll('li'); // todas as LI's
const ultimoLi = lista.querySelector('li:last-child'); // último filho
//console.log(ultimoLi);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

//contato.removeChild(titulo);

//animais.appendChild(titulo);
//contato.insertBefore(animais, titulo);

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Valeu, Natalina!';
novoH1.classList.add('titulo');

contato.appendChild(novoH1);
