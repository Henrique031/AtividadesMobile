/*
Ordenação


Faça um programa que solicite que o usuário digite 3 números e guarde-os nas variáveis a, b e c 
Depois mostre os números em ordem crescente


Utilize if encadeado para resolver este caso


Entregar o fluxograma e o código .js
*/

console.log('Programa que mostre números em ordem crescente...')
//prompt = require('prompt-sync') ()

 
let a = 10    //prompt('Digite o primero número: ')  //7
let b = 1  //prompt('Digite o primero número: ') //4
let c = 5  //prompt('Digite o primero número: ') //2

if ((a < b) && (a < c)) {
    console.log(a)
} else if ((a > b) && (a > c)) {
    console.log(c)
} else if ((a < b) && (a > c)) {
    console.log(c)
}

if ((b > a) && (b < c)) {
    console.log(b)
} else if ((b > a) && (b > c)) {
    console.log(a)
} else if ((b < a) && (b < c)) {
    console.log(b)
}
//  if ((a < b) && (a < c)) {
//     console.log(a)
// } else if ((a > b) && (a > c)) {
//     console.log(c)
// } else if ((a < b) && (a > c)) {
//     console.log(c)
// }


