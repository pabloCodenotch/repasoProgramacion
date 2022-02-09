import { charCounter } from "../caracteres";
import { parImpar } from "../parImpar";

function counter(array :string []):string
{
    let respuesta:string = "";
    let cadena: number = 0;

    cadena = charCounter(array)

    respuesta = parImpar(cadena)

    return respuesta
}

let array1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]
let array2: string[] = ["Barco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"]
let array3: string[] = ["Venezuela", "Veneno", "Voltaje"]

console.log(counter(array1));
console.log(counter(array2));
console.log(counter(array3));