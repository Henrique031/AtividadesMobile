/*
Una as afirmações criadas no exercício anterior usando os operadores && (AND), || (OR) e ^ (OU Exclusivo),
para gerar 8 resultados diferentes.
Ex.:
let vontadeFicarEmCasa = ((frio === true) && (tempoSeco === true));
*/

let bateriaCel = 17;
let tela = true
let carregarBateria = bateriaCel <= 15; //false

let res1 = (bateriaCel <=0 && bateriaCel <=15) // => false
                        /*false*/
let res2= (bateriaCel >=1 && bateriaCel <=5)  || (bateriaCel >=6 && bateriaCel <=15) // => false
                        /*false*/                           /*false*/ 
let res3 = (bateriaCel <=5 || tela == true)  && (bateriaCel >=6 || bateriaCel <=15) // => false
                        /*true*/                                    /*false*/                               
let res4 = (bateriaCel >=16 || tela == true)  && (tela == true || bateriaCel ^ 17) // => true
                        /*true*/                             /*true*/

//-----------------------//----------------------//--------------------------------//---------------------//


let idade = 21;
nomeAluno = 'henrique'
let aluno = (idade >= 18);// => true

let resultado1 = (idade >= 0.1 && idade <= 3)  // => false
                        /*false*/
let resultado2 = (idade == 21) || (idade == 25) // => True
                /*true*/        /*false*/
let resultado3 = (idade ^ 20)  // => 0
                    /*0*/
let resultado4 = (nomeAluno === 'henrique') && (idade === 21) // => true
                            /*true*/               /*true*/

let res = resultado3 === 0 ?'Igual á zero':'Não igual a zero' // => Igual á zero   