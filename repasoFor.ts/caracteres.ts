 export function charCounter(valor: string[]):number
{
    let cadena: string = ""
    cadena = valor.toString()
    return cadena.length
    
}

let array: string[] = ["klaatu", "barada", "nikto"]

console.log(charCounter(array))

// SE QUE NO TIENE NI BUCLE NI NADA PERO SIRVE