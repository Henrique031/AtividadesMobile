console.log('Programa que informa o valor atual da humidade do ambiente');

prompt = require('prompt-sync') ();

let humidade = prompt('Informe a humidade atual: ');

if (humidade > 70) {;
    console.log('O ar está húmido!');
} if (humidade >=30 && humidade <=70) {;
    console.log('O ar está seco!');
} else if (humidade < 30) {;
    console.log('O ar está muito seco!');
};