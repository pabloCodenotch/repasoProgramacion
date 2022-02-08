
let valor:number [] = [5, 7, 19, 3, 3, 23, 1]

function impPares(valor: number[]):boolean
{
    let confirmacion: boolean = false;
    // for(let i = 0; i< valor.length; i++)
    // {

    //     if(valor[i]%2 == 0)
    //     {
    //       confirmacion = true;
           
    //     }
    // }

    let i = 0;
    while(i < valor.length && valor[i]%2 != 0)
    {
        i++;    
    }
    confirmacion = i < valor.length 
    return confirmacion
}



console.log(impPares(valor))