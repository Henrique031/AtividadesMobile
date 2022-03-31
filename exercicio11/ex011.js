/*
 Faça um programa que solicite a temperatura atual para o usuário em graus Celsius.
 E este programa deverá mostrar apenas uma das seguintes frases:

 Está calor quando a temperatura for maior que 25
 Está frio quando a temperatura não for maior que 25 
*/

console.log('Programa para ler a temperatura atual digitada pelo usuário...');
prompt = require('prompt-sync') ();
console.log('Digite a temperatura atual:');
temperatura = prompt('' , + '°');

if (temperatura >= 25) {;
    console.log(`${temperatura + '°'} Está calor!`);
} else {;
    console.log(`${temperatura + '°'} Está frio!`);  
};

let res = temperatura >= 25 ?"Está calor!":"Está frio!"