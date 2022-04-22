/* 
Crie um programa contendo uma lista chamada filmesAssistidos com os nomes de 10 filmes ou séries.
No mesmo código crie uma outra lista chamada filmesAssistidos contendo os mesmos 10 filmes da lista filmesAssistidos
Remova da lista filmesAssistidos o último elemento desta lista.


Mostre ambas listas na tela.
*/

function deletar() {


    let filmesDisponiveis = [
    'halo', 'peaky blinders',
    'suits', 'annie',
    'black mirror',
    'elite', 'the wankig dead',
    '3%', 'homem aranha de volta ao lar',
    'doutor estranho'
    ];
    
    let filmesAssistidos = [
        'halo', 'peaky blinders',
        'suits', 'annie',
        'black mirror',
        'elite', 'the wankig dead',
        '3%', 'homem aranha de volta ao lar',
        'doutor estranho'
    ];

       novoFilme = filmesAssistidos.splice(9);
        // console.log(novoFilme);

    console.log(filmesDisponiveis);
    console.log(filmesAssistidos);

}

deletar();

/* Saída
[
  'halo',
  'peaky blinders',
  'suits',
  'annie',
  'black mirror',
  'elite',
  'the wankig dead',
  '3%',
  'homem aranha de volta ao lar',
  'doutor estranho'
]
[
  'halo',
  'peaky blinders',
  'suits',
  'annie',
  'black mirror',
  'elite',
  'the wankig dead',
  '3%',
  'homem aranha de volta ao lar'
]
*/