/*
Faça um pequeno programa para simular um conselheiro para o jogo de 21.

O programa deve solicitar ao usuário para que digite a soma das cartas, 
e baseado nesta soma o programa informará ao usuário qual a melhor decisão a ser tomada, seguindo a tabela em anexo:

Entregar o fluxograma e o código .js
*/

console.log('Programa simulador do jogo 21...');
prompt = require('prompt-sync') ();

console.log(`Digite seu deck de cartas: `);
var carta1 = prompt('Carta 1 => ');
carta1 = Number(carta1);
//carta1 = parseInt(carta1);
var carta2 = prompt('Carta 2 => ');
carta2 = Number(carta2)
//carta2 = parseInt(carta2);
var carta3 = prompt('Carta 3 => ');
carta3 = Number(carta3);
//carta3 = parseInt(carta3);

let soma = carta1 + carta2 + carta3;

if (soma <= 10) {
    console.log('Sem dúvida, compre mais uma carta.')
} if (soma > 10 && soma <=15) {
    console.log('Há um risco, mas aconselho a comprar mais uma carta.')
} if (soma > 15 && soma <=20) {
    console.log('Aconselho a parar de jogar')
} if (soma == 21) {
    console.log('Você ganhou não compre mais nada!')
} if (soma >21) {
    console.log('Você perdeu!!!')
};