var videogame = ['playstation 1', 'xbox', 'nintendo 64', 'playstation2'];

// for (var x = 0; x < 4; x++) {
//   console.log(videogame[x] + 'indice: ' + x);
// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// Retorna de 0 a 9 no console

videogame.forEach((item) => {
  console.log(item.toLocaleUpperCase());
});

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}
