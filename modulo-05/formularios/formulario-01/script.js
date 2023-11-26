const contato = document.querySelector('#contato');
const texto = document.querySelector('.texto');
const dados = {};

function handleChange(event) {
  // const target = event.target;
  // if (!target.checkValidity()) {
  //   target.classList.add('invalido');
  //   contato.nome.setCustomValidity('Esse campo é super importante!!');
  //   target.nextElementSibling.innerText = target.validationMessage;
  // }
  // texto.innerText = event.target.value;
  // document.body.style.background = event.target.value;

  dados[event.target.name] = event.target.value;
}

contato.addEventListener('change', handleChange);
console.log(contato.value);
