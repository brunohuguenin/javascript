// async function puxarDados() {
//   const dadosResponse = await fetch('./dados.json');
//   const dadosJson = await dadosResponse.json();

//   document.body.innerText = dadosJson.nome;
// }

// puxarDados();

async function puxarDados() {
  try {
    const dadosResponse = await fetch('./dados.json');
    const dadosJson = await dadosResponse.json();
    document.body.innerText = dadosJson.nome;
  } catch (erro) {
    console.log('Ocorreu um erro');
  }
}

puxarDados();
