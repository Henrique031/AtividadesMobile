/*
Ordenação
Faça um programa que solicite que o usuário digite 2 números e guarde-os nas variáveis a e b 
Depois mostre os números em ordem crescente


Entregar o fluxograma e o código .js
*/

console.log('Progrma que solicite 2 números, para depois mostras em ondem crescente...');
prompt = require('prompt-sync') ();
let res = [ 
    a = prompt('Número 1: '),
    b = prompt('Número 2: '),
];
console.log(`${res.sort()}`);