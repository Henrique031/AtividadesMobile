/*
Una as afirmações criadas no exercício anterior usando os operadores && (AND), || (OR) e ^ (OU Exclusivo),
para gerar 8 resultados diferentes.
Ex.:
let vontadeFicarEmCasa = ((frio === true) && (tempoSeco === true));
*/

let bateriaCel = 17;
let carregarBateria = bateriaCel <= 15; //false

let res1 = (bateriaCel <=0 && bateriaCel <=15); // => false
                        /*false*/
let res2 = (bateriaCel >=1 && bateriaCel <=5)  || (bateriaCel >=6 && bateriaCel <=15); // => false
                        /*false*/                           /*false*/
let res3 = (bateriaCel == 0); // => false
                    /*false */
let res4 = (bateriaCel ^ bateriaCel); // => 0


//-----------------------//----------------------//--------------------------------//---------------------//


let idade = 21;
let aluno = (idade >= 18);// => true

let resultado1 = (idade >= 0.1 && idade <= 3);  // => false
                        /*false*/
let resultado2 = (idade == 21) || (idade == 25); // => True
                /*true*/        /*false*/
let resultado3 = (idade ^ 20);  // => 0
                    /*0*/
let resultado4 = (idade <17 || idade >= 18); // =>true
                            /*ture */

//let res = resultado3 === 0 ?'Igual á zero':'Não igual a zero'; // => Igual á zero   ;



//-----------------------//---------------------------------//----------------------------------//------------//


let hora = 13.5;
let tarde = (hora >= 12);

let resu1 = (hora == 13.5); // => true
                //true
let resu2 = (hora ^ hora); // => 0
                /*0*/
let resu3 = (hora >= 19 && hora <=11.59); // => false
                /*false */   /*false */
let resu4 = (hora == 13.5 ||  hora == 19); // => true
                /*true */       /*false */
//-----------------------------------------//-----------------------------------//----------------------------//

let clima = "chuva";
let resClima = (clima == "sol");

let result1 = (clima == "chuva"); // => true;
                    /*true */
let result2 = (clima == "chuva" && clima == 'sol'); // => false;
                    /*true */           /*false */
let result3 = (clima == "chuva" || clima == 'tespestade'); // => true;
                    /*true */            /*false */
let result4 = (clima ^ 'chuva'); // => 0;
                    /*0*/