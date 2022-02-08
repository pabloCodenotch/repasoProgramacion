function arrayReverse(valor: string[])
{
    let eobard: string [] = [];
    for(let i = valor.length-1; i >= 0; i--)
    {
        eobard.push(valor[i])
    }

    
     return eobard
}

let quarks: string[] = ["arriba", "abajo", "encanto", "extraño", "fondo", "cima"]




console.log(arrayReverse(quarks))

