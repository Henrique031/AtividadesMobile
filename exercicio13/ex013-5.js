console.log('Programa para ler graus em Celsius...');

prompt = require('prompt-sync') ();

let temperatura = prompt('Digite a temperatura: ');

if (temperatura < -10) {
    console.log('Está congelando!')
} else if (temperatura >= -10 && temperatura <=0) {
    console.log('Está muito frio!')
} else if (temperatura >= 0 && temperatura <10) {
    console.log('Está frio')
} else if (temperatura >= 10 && temperatura <= 20) {
    console.log('Está agradavel')
} else if (temperatura >=20 && temperatura <= 25) {
    console.log('Está calor')
} else if (temperatura >= 25 && temperatura < 35) {
    console.log('Está muito calor!')
} else if (temperatura >= 35) {
    console.log('Está insuportavelmente quente!')
}