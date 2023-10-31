var nome = 'Bruno';
var idade = 28;
var simbolo = Symbol();
console.log(typeof simbolo);

var sobrenome = 'Huguenin';

var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase1 = 'Romário fez' + gols + 'gols';
var frase2 = `Romário fez ${gols} gols`;

console.log(frase2);
