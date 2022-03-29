/*
Ordenn1ção


Fn1çn1 um progrn1mn1 que solicite que o usuário digite 3 números e gun1rde-os nn1s vn1riáveis n1, n2 e n3 
Depois mostre os números em ordem crescente


Utilize if encn1den1do pn1rn1 resolver este cn1so


Entregn1r o fluxogrn1mn1 e o código .js
*/

console.log('Progrn1mn1 que mostre números em ordem crescente...');
prompt = require('prompt-sync') ();

 
let n1 = prompt('Digite o primero número: ');  
let n2 = prompt('Digite o segundo número: '); 
let n3 = prompt('Digite o terceiro número: '); 

if ((n1 < n2 && n1 < n3) && (n2 > n1 && n2 < n3) && (n3 > n1 && n3 > n2) ) {
    console.log(n1)
    console.log(n2)
    console.log(n3)
} if ((n1 > n2 && n1 < n3) && (n2 < n1 && n2 > n3) && (n3 < n1 && n3 < n2) ) {
    console.log(n3)
    console.log(n2)
    console.log(n1)
} if ((n1 < n2 && n1 > n3) && (n2 > n1 && n2 > n3) && (n3 < n1 && n3 < n2) ) {
    console.log(n3)
    console.log(n1)
    console.log(n2)
} if ((n1 < n2 && n1 < n3) && (n2 > n1 && n2 > n3) && (n3 > n1 && n3 < n2) ) {
    console.log(n1)
    console.log(n3)
    console.log(n2)
} if ((n1 > n2 && n1 > n3) && (n2 < n1 && n2 < n3) && (n3 < n1 && n3 > n2) ) {
    console.log(n2)
    console.log(n3)
    console.log(n1)
} if ((n1 > n2 && n1 < n3) && (n2 < n1 && n2 < n3) && (n3 > n1 && n3 > n2) ) {
    console.log(n2)
    console.log(n1)
    console.log(n3)
} if ((n1 > n2 && n1 > n3) && (n2 < n1 && n2 > n3) && (n3 < n1 && n3 < n2) ) {
    console.log(n3)
    console.log(n2)
    console.log(n1)
};
