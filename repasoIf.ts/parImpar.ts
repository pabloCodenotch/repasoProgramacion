export function parImpar(x: number): string
{
    let respuesta: string
    if(x%2 == 0)
    {
        respuesta =  "La suma de caracters es par."
    }
    else
    {
        respuesta =  "la suma de caracteres es impar."
    }
    return respuesta
}

parImpar(19)