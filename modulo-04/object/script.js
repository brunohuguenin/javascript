// // const pessoa = new Object({
// //   nome: 'Bruno',
// //   idade: 25,
// // });

// // const carro = {
// //   rodas: 4,
// //   init(marca) {
// //     this.marca = marca;
// //     return this;
// //   },
// //   acelerar() {
// //     return `${this.marca} acelerou as ${this.rodas} rodas`;
// //   },
// //   buzinar() {
// //     return this.marca + ' buzinou';
// //   },
// // };

// // const honda = Object.create(carro).init('Honda');

// // const ferrari = Object.create(carro).init('Ferrari');
// // console.log(ferrari.acelerar());

// // const funcaoAutomovel = {
// //   acelerar() {
// //     return 'acelerou';
// //   },
// //   buzinar() {
// //     return 'buzinou';
// //   },
// // };

// // const moto = {
// //   rodas: 2,
// //   capacete: true,
// // };

// // Object.assign(moto, funcaoAutomovel, {
// //   cor: 'azul',
// //   motor: '250 km/h',
// // });

// const moto = {};
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     enumarable: true, // torna enumerável
//   },
//   capacete: {
//     value: true,
//     configurable: true,
//     writable: false, // impede mudança de valor
//   },
// });

// moto.rodas = 4;
// delete moto.capacete;
// moto;
// // {rodas: 2}

// Object.getOwnPropertyDescriptors(Array);
// // Lista com métodos e propriedades e Array

// Object.getOwnPropertyDescriptors(Array.prototype);
// // Lista com métodos e propriedades do protótipo de Array

// Object.getOwnPropertyDescriptor(window, 'innerHeight');
// // Puxa de uma única propriedade

// Object.getOwnPropertyDescriptors(Array);
// // Lista com métodos e propriedades e Array

// Object.getOwnPropertyDescriptors(Array.prototype);
// // Lista com métodos e propriedades do protótipo de Array

// Object.getOwnPropertyDescriptor(window, 'innerHeight');
// // Puxa de uma única propriedade

const frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = { marca: 'Ford' };
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
