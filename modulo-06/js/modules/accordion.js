// -------- Accordion ---------
export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
  const activClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activClass);
    accordionList[0].nextElementSibling.classList.add(activClass);

    const activAccordion = (event) => {
      event.currentTarget.classList.toggle(activClass);
      event.currentTarget.nextElementSibling.classList.toggle(activClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activAccordion);
    });
  }
}
