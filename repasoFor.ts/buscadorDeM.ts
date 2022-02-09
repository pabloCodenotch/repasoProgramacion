function mSearch (myArray: string[])
{
    let resultado: boolean = true;

    for (let i = 0 ; i < myArray.length ; i++)
    {
        if (myArray[i].charAt(0) != "M")
        {
            resultado = false;
        }
    }
    return resultado;
}
let nombres: string[] = ["Manolo", "Benito", "Marta", "MPablo","Maricarmen"]

console.log(mSearch(nombres))