/*Faça um pograma que solicite ao usuário o preço atual da gasolina e informe
a menssagem" A gasolina está cara" se o valor informado for maior que 2.5
*/
console.log('Programa para informar o preço da gasolina atualmente...');

const readline = require('readline-sync');

let n1 = readline.question('Informe o preço atual da gasolina ==> ');


if (n1 >= 2.5) {
    console.log('A gasolina está cara!')
} else {
    console.log('Não está cara!')
};
let res = n1 >= 2.5 ? 'A gasolina está cara!': 'Não está cara!';
console.log(res);