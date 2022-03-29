console.log('Progrn1mn1 que mostre números em ordem crescente...');
prompt = require('prompt-sync') ();


let n1 = prompt('Digite o primero número: ');
let n2 = prompt('Digite o segundo número: ');
let n3 = prompt('Digite o terceiro número: ');

if ((n1 < n2 && n1 < n3) && (n2 > n1 && n2 < n3) && (n3 > n1 && n3 > n2) ) {
    console.log(n1, n2, n3)
} if ((n1 > n2 && n1 < n3) && (n2 < n1 && n2 > n3) && (n3 < n1 && n3 < n2) ) {
    console.log(n3, n2, n1)
} if ((n1 < n2 && n1 > n3) && (n2 > n1 && n2 > n3) && (n3 < n1 && n3 < n2) ) {
    console.log(n3, n1, n2)
} if ((n1 < n2 && n1 < n3) && (n2 > n1 && n2 > n3) && (n3 > n1 && n3 < n2) ) {
    console.log(n1, n3, n2)
} if ((n1 > n2 && n1 > n3) && (n2 < n1 && n2 < n3) && (n3 < n1 && n3 > n2) ) {
    console.log(n2, n3, n1)
} if ((n1 > n2 && n1 < n3) && (n2 < n1 && n2 < n3) && (n3 > n1 && n3 > n2) ) {
    console.log(n2, n1, n3)
} if ((n1 > n2 && n1 > n3) && (n2 < n1 && n2 > n3) && (n3 < n1 && n3 < n2) ) {
    console.log(n3, n2, n1)
};
