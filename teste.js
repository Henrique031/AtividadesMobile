let contador = 0;

console.log('Número - Raiz');

while(contador < 200){
    let raizQuadrada = Math.sqrt(++contador);

    let print = raiz => console.log(`${contador} - ${raiz}`);

    print(raizQuadrada % 1 === 0 ? raizQuadrada.toFixed(1) : raizQuadrada)
}