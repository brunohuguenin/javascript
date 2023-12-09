function $$(selectedElement) {
  const elements = document.querySelectorAll(selectedElement);

  function hide() {
    elements.forEach((element) => {
      element.style.display = 'none';
    });
    return $$(selectedElement);
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = 'initial';
    });
    return $$(selectedElement);
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return $$(selectedElement);
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return $$(selectedElement);
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remoce(className);
    });
    return $$(selectedElement);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$('button');

console.log(btns.show());

function handleClick(event) {
  btns.addClass('ativo');
  console.log(event.target);
}

btns.on('click', handleClick);
