/* 
Faça um programa que solicite ao usuário para digitar um número e exiba todos
 os números desde o informado pelo usuário até o número 1 de maneira decrescente
*/

console.log('Programa que informa o número inserido de maneira decrescente')
prompt = require('prompt-sync') ()

var n1 = parseInt(prompt('Digite um número: '))

while (n1 > 0) {
    n1--
    console.log(n1)
}