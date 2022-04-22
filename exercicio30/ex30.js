/* 
Faça um programa que peça 10 números ao usuário, guarde-os em uma lista, e depois mostre as seguintes informações: 
* A soma de todos os números
* A média aritmética
* O maior número
* O menor número
*/

prompt = require('prompt-sync')();
console.log('Informe 10 números...');
console.log('');

let numeros = [];
var soma = 0;
var media = 0;
var maiorNum = 0;
var menorNum = 0;

for (var contador = 0; contador < 10; contador++) {
  numeros[contador] = parseInt(prompt('Informe os números: '));
  soma += numeros[contador];
  media = soma / 10;
};

console.log('');
console.log('A soma é: ' + soma);
console.log('A média é: ' + media);

numeros.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0 ;
});
maiorNum = numeros[9];
menorNum = numeros[0];

console.log('Maior número: ' + maiorNum);
console.log('Menor número: ' + menorNum);

/* Saída
Informe os números: 10
Informe os números: 20
Informe os números: 30
Informe os números: 40
Informe os números: 21
Informe os números: 63
Informe os números: 9
Informe os números: 1
Informe os números: 100
Informe os números: 89

A soma é: 383
A média é: 38.3
Maior número: 100
Menor número: 1
*/
