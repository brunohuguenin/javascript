const imgs = document.querySelectorAll('img');

imgs.forEach(function (item, index, array) {
  //console.log(item, index, array);
});

const titulos = document.getElementsByClassName('titulo');

const titulosArray = Array.from(titulos);
titulosArray.forEach((i) => console.log(i));
