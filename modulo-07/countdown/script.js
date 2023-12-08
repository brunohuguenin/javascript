import Countdown from './countdown.js';

const diasParaONatal = new Countdown('25 December 2023 23:59:59 GMT -0300');
const diasParaOAnoNovo = new Countdown('31 December 2023 23:59:59 GMT -0300');
const diasParaOMeuBday = new Countdown('23 March 2024 23:59:59 GMT -0300');

console.log(diasParaONatal.total);
console.log(diasParaOAnoNovo.total);

// setInterval(() => {
//   console.log(diasParaOMeuBday.total);
// }, 1000);
