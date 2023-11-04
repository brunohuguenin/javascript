// -------- Navegação por Tabs ---------
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

// -------- Accordion ---------
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

// ---------- scroll suave -------------
const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    console.log(section);
  };

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
};
initScrollSuave();
