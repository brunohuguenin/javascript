export default function initAnimaNumero() {}

function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero) => {
    const total = Number(numero.innerText);
    const incremento = Math.floor(total / 100);
    let start = 0;
    const time = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(time);
      }
    }, 30 * Math.random());
  });
}
function handleMutation(mutation) {
  if (mutation[0].target.classList.contains('ativo')) {
    observer.disconnect();
    animaNumeros();
  }
}

const observeTarget = document.querySelector('.numeros');
const observer = new MutationObserver(handleMutation);

observer.observe(observeTarget, { attributes: true });
