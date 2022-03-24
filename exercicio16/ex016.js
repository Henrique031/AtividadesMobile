/*
Ordenação


Faça um programa que solicite que o usuário digite 3 números e guarde-os nas variáveis a, b e c 
Depois mostre os números em ordem crescente


Utilize if encadeado para resolver este caso


Entregar o fluxograma e o código .js
*/

console.log('Programa que mostre números em ordem crescente...')
prompt = require('prompt-sync') ()

 
let a = prompt('Digite o primero número: ')  
let b = prompt('Digite o primero número: ') 
let c = prompt('Digite o primero número: ') 

if ((a < b && a < c) && (b > a && b < c) && (c > a && c > b) ) {
    console.log(a)
    console.log(b)
    console.log(c)
} if ((a > b && a < c) && (b < a && b > c) && (c < a && c < b) ) {
    console.log(c)
    console.log(b)
    console.log(a)
} if ((a < b && a > c) && (b > a && b > c) && (c < a && c < b) ) {
    console.log(c)
    console.log(a)
    console.log(b)
} if ((a < b && a < c) && (b > a && b > c) && (c > a && c < b) ) {
    console.log(a)
    console.log(c)
    console.log(b)
} if ((a > b && a > c) && (b < a && b < c) && (c < a && c > b) ) {
    console.log(b)
    console.log(c)
    console.log(a)
} if ((a > b && a < c) && (b < a && b < c) && (c > a && c > b) ) {
    console.log(b)
    console.log(a)
    console.log(c)
} if ((a > b && a > c) && (b < a && b > c) && (c < a && c < b) ) {
    console.log(c)
    console.log(b)
    console.log(a)
}
