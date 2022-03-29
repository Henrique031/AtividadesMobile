/*
Faça um programa que solicite ao usuário para informar o valor da humidade atual do ambiente, correspondente a porcentagem de humidade no ar. 
E este programa deverá mostrar apenas uma das seguintes frases:

O ar está húmido quando a humidade for maior que 70
O ar está seco quando a humidade for maior igual a 30 e menor igual a 70
O ar está muito seco quando a humidade for menor que 30

Utilize o if encadeado para resolver esta questão, veja o fluxograma em anexo
*/

console.log('Programa que informa o valor atual da humidade do ambiente');

prompt = require('prompt-sync') ();

let humidade = prompt('Informe a humidade atual: ');

if (humidade > 70) {
    console.log('O ar está húmido!')
} if (humidade >=30 && humidade <=70) {
    console.log('O ar está seco!')
} else if (humidade < 30) {
    console.log('O ar está muito seco!')
};

/*
"start": "npm run start1 & npm run start2 & npm run start3  ",
    "start1": "node ex012.js ",
    "start2": "node ex012-1.js ",
    "start3": "node ex012-2.js "
*/