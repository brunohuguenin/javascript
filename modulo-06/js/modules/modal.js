export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    const toggleModal = (event) => {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    };

    const cliqueForaModal = (event) => {
      const sectionModal = document.querySelector('[data-modal="container"]');
      if (event.target == sectionModal) {
        toggleModal(event);
      }
    };

    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
