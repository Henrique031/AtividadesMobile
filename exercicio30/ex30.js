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
  numeros[contador] = parseInt(prompt(`Informe o ${contador+1}º número: `));
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
Informe 10 números...

Informe o 1º número: 10
Informe o 2º número: 20
Informe o 3º número: 100
Informe o 4º número: 34
Informe o 5º número: 64
Informe o 6º número: 477
Informe o 7º número: 34
Informe o 8º número: 367
Informe o 9º número: 23
Informe o 10º número: 2

A soma é: 1131
A média é: 113.1
Maior número: 477
Menor número: 2 */
