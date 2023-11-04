// const Dom = {
//   seletor: 'li',
//   elemento() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = this.elemento().classList.add('ativar');
//     return 'item ativado';
//   },
// };
// Dom.seletor = 'ul';

function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor);
  };
  this.ativar = () => {
    this.element().classList.add('ativar');
    return 'item ativado';
  };
}

const ativarUl = new Dom('ul');
ativarUl.ativar();

const ativarLi = new Dom('li');
ativarLi.ativar();

const ativarLastLi = new Dom('li:last-child');
ativarLastLi.ativar();
