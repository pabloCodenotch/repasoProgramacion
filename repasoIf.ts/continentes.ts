function introducePais(pais: string)
{
    let america: string []= ["Canadá", "Venezuela", "Uruguay", "Argentina", "Panamá"]
    let europa: string [] = ["España", "Rumanía", "Irlanda", "Mónaco", "Liechestein"]
    let africa: string[] = ["Marruecos", "Madagascar", "Túnez", "Tanzania", "República Democrática del Congo"]
    let asia: string[] = ["China", "Uzbekistán", "India", "Mogolia", "Vietnam"]
    let oceania: string[] = ["Australia", "Nueva Zelanda", "Palaos", "Samoa", "Wallis & Futuna"]
    let antartida: string[] = ["Antártida"]
    
    
    if(america.includes(pais))
    {
        console.log("Este país se encuentra en América")
    }
    else if(europa.includes(pais))
    {
        console.log("Este país se encuentra en Europa") 
    }
    else if(africa.includes(pais))
    {
        console.log("Este país se encuentra en Africa")
    }
    else if(asia.includes(pais))
    {
        console.log("Este país se encuentra en Asia")
    }
    else if(oceania.includes(pais))
    {
        console.log("Este país se encuentra en Oceanía")
    }
    else if(antartida.includes(pais))
    {
        console.log("Este país se encuentra en Antártida")
    }
    else
    {
        console.log("No recogido")
    }    
}

introducePais("Samoa")