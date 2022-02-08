function zodiaco(dia: number, mes: string):string
{ 
    let resultado:string 

    if ((dia > 19 && dia <32) && mes == "marzo" || (dia > 0 && dia <21) && mes == "abril")
    {
        resultado = "Eres Aries, presenta tus repetos a Mu"
    }
    else if((dia >20 && dia <31) && mes == "abril" || (dia >0 && dia < 22 ) && mes == "mayo")
    {
        resultado = "Eres Tauro, presenta tus respetos a Aldebarán"
    }
    else if((dia > 21 && dia < 32) && mes == "mayo" || (dia > 0 && dia < 22) && mes == "junio")
    {
        resultado =  "Eres Géminis, presenta tus respetos a Saga"
    }
    else if((dia > 21 && dia < 31) && mes == "junio" || (dia > 0 && dia < 23) && mes == "julio")
    {
        resultado = "Eres Cáncer, presenta tus respetos a Deathmask"
    }
    else if((dia > 22 && dia < 32) && mes == "julio" || (dia > 0 && dia < 23) && mes == "agosto")
    {
        resultado = "Eres Leo, presenta tus respetos a Aioria"
    }
    else if((dia >22 && dia < 32) && mes == "agosto" ||(dia > 0 && dia < 23) && mes == "septiembre")
    {
        resultado =  "Eres Virgo, presenta tus respetos a Shaka"
    }
    else if((dia > 22 && dia < 31) && mes == "septiembre" || (dia > 0 && dia < 23) && mes == "octubre")
    {
        resultado =  "Eres Libra, no tienes a quién presentar tus respetos"
    }
    else if((dia > 22 && dia < 32) && mes == "octubre" || (dia > 0 && dia < 23) && mes == "noviembre")
    {
        resultado = "Eres Escorpio, presenta tus respetos a Milo"
    }
    else if(((dia > 22 &&  dia < 31) && mes == "noviembre" ) || ((dia > 0 && dia < 22) && mes == "diciembre"))
    {
        resultado = "Eres Sagitario, presenta tus respetos a Aioros"
    }
    else if ((dia > 21 && dia < 32) && mes == "diciembre" || (dia > 0 && dia < 21) && mes == "enero")
    {
        resultado = "Eres Capricornio, presenta tus respetos a Shura"
    }
    else if ((dia > 22 && dia < 32) && mes == "enero" || (dia > 0 && dia < 19) && mes == "febrero")
    {
        resultado = "Eres Acuario, presenta tus respetos a Camus"
    }
    else if((dia > 20 && dia < 30) && mes == "febrero" || (dia > 0 && dia < 20) && mes == "marzo")
    {
        resultado = "Eres Piscis, presenta tus repetos a Afrodita"
    }
    else
    {
        resultado = "FECHA INCORRECTA"
    }

    return resultado
}



console.log(zodiaco(19,"abril"))
console.log(zodiaco(21,"mayo"))
console.log(zodiaco(21, "junio"))
console.log(zodiaco(22,"julio"))
console.log(zodiaco(22,"agosto"))
console.log(zodiaco(22,"septiembre"))
console.log(zodiaco(22,"octubre"))
console.log(zodiaco(22,"noviembre"))
console.log(zodiaco(21,"diciembre"))
console.log(zodiaco(20,"enero"))
console.log(zodiaco(18,"febrero"))
console.log(zodiaco(20,"marzo"))