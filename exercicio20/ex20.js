/* 
var i = 1;
while ( i < 5 ) {
   console.log("executando laço: " + i);
   i++;
}

Baseado no código acima, construa um app que mostre a tabuada do numero 7 na console.


7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70

* Desafio, modifique o programa para usar um laço (for) ao invés do (while)
*/

for (var n1 = 1; n1 <= 10;n1++){
    console.log( '7 X ' + n1 + ' = ' + `${7*n1}`)
}

/*  SAÍDA
7 X 1 = 7
7 X 2 = 14
7 X 3 = 21
7 X 4 = 28
7 X 5 = 35
7 X 6 = 42
7 X 7 = 49
7 X 8 = 56
7 X 9 = 63
7 X 10 = 70
*/