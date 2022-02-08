function mSearch(valor: string[])
{
    let booleanas: string []

    let confirmacion: boolean
    
    for(let i=0; i<valor.length; i++)
    {
        let check = (valor) => {valor[i].charAt(0) == "M"}
        
         confirmacion = booleanas.some(check)
    }
        
    return confirmacion
}
let nombres: string[] = ["Manolo", "Benito", "Marta", "MPablo","Maricarmen"]

console.log(mSearch(nombres))