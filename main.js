let moneda = prompt("SELECCIONAR COTIZACION \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");

while (moneda != "3"){ 

    if (moneda == "1"){

        let cantidad = prompt("INGRESE CANTIDAD DE PESOS");
        alert(cotizarDolar(cantidad));

    }else if (moneda == "2"){ 

        let cantidad2 = prompt("INGRESE CANTIDAD DE DOLARES");
        alert(cotizarPesos(cantidad2));
        
    }else {
        alert("ERROR: SELECCION INVALIDA");
    }
    moneda = prompt("SELECCIONAR COTIZACION \n\n 1 - PESOS A DOLARES \n 2 - DOLARES A PESOS \n\n 3 - SALIR");
}

function cotizarDolar(pesos){
    return "RECIBIRA USD:\n\n$"+ pesos / 200;
}

function cotizarPesos(dolar){
    return "RECIBIRA PESOS:\n\n$"+ dolar * 200;
}
