/* 
Faça um programa que liste apenas os números ímpares do 1 ao 100
    1
    5
    7
    ...
    99
*/

for (let contador = 1; contador < 100; contador++){
    if (contador % 2 == 1) {
        console.log(contador)
    }
}