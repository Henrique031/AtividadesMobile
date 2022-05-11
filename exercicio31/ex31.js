/* Faça um programa que peça 5 números ao usuário e mostre os números em ordem crescente na tela.
*Obs.: Não utilize nenhuma função pronta, crie seu próprio código para fazer a ordenação.
Ver dica de algoritmo no link em anexo */


const prompt = require('prompt-sync') ();

var lista = [];
var temp;
var j;
var i;
var pergunta;

for (pergunta = 1; pergunta <= 5; pergunta++) {
    lista[pergunta-1] = parseInt(prompt(`Digite o ${pergunta}º número: `))
}

for( j = 1; j < 6; j++){

    for( i = 0; i < 5; i++){
        if(lista[i] > lista[i+1]) {
            temp = lista[i+1]
            lista[i+1] = lista[i]
            lista[i] = temp
        }
    }
}

console.log(lista)




/* console.log('Digite 5 números a baixo');
console.log('');
function numeros(){

    var num = [];
    for(var contador = 1; contador <= 5; contador++) {
        num[contador-1] = Number(prompt(`Digite o ${contador}º número: `));
    };
    num.sort((a , b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log('Os números ordenados para ordem crescente ficam =>')
    console.log(num);
};

numeros(); */



/* Saída

Digite 10 números a baixo

Digite o 1º número: 10
Digite o 2º número: 20
Digite o 3º número: 100
Digite o 4º número: 57
Digite o 5º número: 45
Os números ordenados para ordem crescente ficam =>
[ 10, 20, 45, 57, 100 ]
*/