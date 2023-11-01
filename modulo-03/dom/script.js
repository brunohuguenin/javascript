//window.alert('Isso mesmo');

const href = window.location.href;
if (href === 'http://127.0.0.1:5500/javascript/modulo-03/dom/index.html')
  console.log('é igual');

const titulo = document.querySelector('h1');

titulo.style.color = '#e54';

titulo.classList.add('titulo-principal');

function callback() {
  console.log('Clicou em ', titulo.innerText);
}

titulo.addEventListener('click', callback);
