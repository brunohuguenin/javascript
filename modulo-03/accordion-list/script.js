const initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    const activTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });

      tabContent[index].classList.add('ativo');
    };

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activTab(index);
      });
    });
  }
};
initTabNav();

const initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activClass);
    accordionList[0].nextElementSibling.classList.add(activClass);

    const activAccordion = (event) => {
      event.currentTarget.classList.toggle('activClass');
      event.currentTarget.nextElementSibling.classList.toggle(activClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activAccordion);
    });
  }
};

initAccordion();
