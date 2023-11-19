export default function initDropdowMenu() {}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

const handleClick = (event) => {
  event.preventDefault();
  console.log(event);
};

dropdownMenus.forEach((menu) => {
  ['touchstart', 'click'].forEach((userEvent) => {
    menu.addEventListener('click', handleClick);
  });
});
