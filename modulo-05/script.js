// -------- Navegação por Tabs ---------
const initTabNav = () => {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    const activTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
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
};

initAccordion();

// ------- scroll suave ----------
const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

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

// ------ Animação ao Scroll ---------
const initAnimacaoScroll = () => {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.5;

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade;
        if (isSectionVisible < 0) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    };

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
};
initAnimacaoScroll();
