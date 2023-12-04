// fetch('./dados.json')
//   .then((response) => response.json())
//   .then((json) => {
//     json.forEach((materia) => {
//       console.log(materia);
//     });
//   });

const configuraçoes = {
  player: 'Google',
  tempo: 25.3,
  aula: '2.1 JavaScript',
};

const stringConfig = JSON.stringify(configuraçoes);
console.log(stringConfig);
