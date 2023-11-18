// ------- scroll suave ----------
export default function initScrollSuave() {
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
}
