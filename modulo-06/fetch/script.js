// const doc = fetch('./doc.txt');
// const conteudo = document.querySelector('.conteudo');

// doc
//   .then((resolucao) => {
//     return resolucao.text();
//   })
//   .then((body) => {
//     console.log(body);
//     conteudo.innerText = body;
//   });

const cep = fetch('https://viacep.com.br/ws/23573340/json/');

cep
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body.logradouro);
  });
