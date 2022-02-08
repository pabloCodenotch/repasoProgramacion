function arcoiris(colors: string[]): void
{
    let arcoiris: string[] = [ "rojo", "naranja", "amarillo", "verde", "azul", "añil", "violeta"];

    let i = 0;

        while(i<colors.length)
        {
            if(arcoiris.includes(colors[i]))
            {
                console.log("El " + colors[i] + " es un color de arcoiris, muy bien.");
                
            }            

            i++;
        }   
}

let colores: string[] = ["rojo", "verde", "sevilla", "rosa", "marrón"] 

arcoiris(colores)