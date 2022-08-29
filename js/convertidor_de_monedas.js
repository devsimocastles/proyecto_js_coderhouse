/*
    IMPORTANTE: 
    1- todos los tipos de cambio usados en este programa son de la fecha: 12/08/2022
    2- los cambios usados son el "libre" o "blue"
*/


// tipos de cambio

let cambio_ars_usd = 0.00344;
let cambio_ars_jpy = 0.45891;
let cambio_ars_eur = 0.00335;
let cambio_ars_gbp = 0.00283;
let cambio_ars_brl = 0.01742;


let cambio_usd_ars = 290.87;
let cambio_eur_ars = 298.47;
let cambio_jpy_ars = 2.18;
let cambio_gbp_ars = 352.95;
let cambio_brl_ars = 57.37;

// variables utilitarias 

let cantidad_pesos;
let cantidad_moneda;
let resultado;


//funcion que comprueba si el valor de cantidad pesos es menor a 0 (invalido)
function inferior_a_cero( cantidad ){
    if ( cantidad < 1) {
        alert("Error -> la cantidad no puede ser inferior a 1")
        return true
    }
    return false
}


//Funcion que convierte pesos a una moneda
function convertir_pesos_a_moneda( cantidad_pesos, moneda_a_convertir , cambio ) {
    let conversion = cantidad_pesos * cambio;
    conversion = conversion.toFixed(2);
    let mensaje = `${cantidad_pesos} AR$ = ${conversion} ${moneda_a_convertir}`
    return mensaje
}


// funcion que convierte una moneda a pesos
function convertir_moneda_a_pesos(cantidad_moneda, moneda, cambio){
    let conversion = cantidad_moneda * cambio;
    conversion = conversion.toFixed(2);
    let mensaje = `${cantidad_moneda} ${moneda} = ${conversion} Pesos Argentinos`
    return mensaje
}


while (true){
    let opcion = prompt(`
    ===Convertidor de Monedas===

    Escriba el número de la opción de conversión que desea realizar

    ==Peso Argentino a otras monedas==
    1 - Peso Argentino a Dolar Americano
    2 - Peso Argentino a Euro
    3 - Peso Argentino a Yen Japonés
    4 - Peso Argentino a Libra Esterlina 
    5 - Peso Argentino a Real Brasileño

    ==Otras monedas a Peso Argentino==
    6 - Dolar Americano a Peso Argentino
    7 - Euro a Peso Argentino
    8 - Yen Japonés a Peso Argentino
    9 - Libra Esterlina a Peso Argentino
    10 - Real Brasileño a Peso Argentino

    Escriba "salir" sin comillas para finalizar el programa.
    `)

    opcion = opcion.toLowerCase()


    // Comprobación del valor de opcion
    if (opcion < 1 || opcion > 10){
        alert("Error -> opción inválida, escriba una opción del 1 al 10");
        continue
    } 

    else if ( opcion == 1 ) {

        cantidad_pesos = parseFloat(prompt(`
==Pesos Argentinos a Dolar Americano==

Escriba la cantidad de Pesos que desea convertir a Dólares:
        `))
    
        if (inferior_a_cero(cantidad_pesos)){
            continue
        }

        resultado = convertir_pesos_a_moneda(cantidad_pesos, "Dólares Americanos", cambio_ars_usd)
        alert(resultado)
    } 

    else if ( opcion == 2 ){
        cantidad_pesos = parseFloat(prompt(`
==Pesos Argentinos a Euros==
        
Escriba la cantidad de Pesos que desea convertir a Euros:
        `))

        if (inferior_a_cero(cantidad_pesos)){
            continue
        }
       
        resultado = convertir_pesos_a_moneda(cantidad_pesos, "Euros", cambio_ars_eur)
        alert(resultado)
    }

    else if ( opcion == 3){
        cantidad_pesos = parseFloat(prompt(`
==Pesos Argentinos a Yen Japonés==
        
Escriba la cantidad de Pesos que desea convertir a Yen Japonés:
        `))

        if (inferior_a_cero(cantidad_pesos)){
            continue
        }
       
        resultado = convertir_pesos_a_moneda(cantidad_pesos, "Yen Japonés", cambio_ars_jpy)
        alert(resultado)
    }

    else if ( opcion == 4 ){
        cantidad_pesos = parseFloat(prompt(`
==Pesos Argentinos a Libra Esterlina==
        
Escriba la cantidad de Pesos que desea convertir a Libra Esterlina:
        `))

        if (inferior_a_cero(cantidad_pesos)){
            continue
        }
       
        resultado = convertir_pesos_a_moneda(cantidad_pesos, "Libra Esterlina", cambio_ars_gbp)
        alert(resultado)
    }

    else if ( opcion == 5 ){
        cantidad_pesos = parseFloat(prompt(`
==Pesos Argentinos a Real Brasileño==
        
    
Escriba la cantidad de Pesos que desea convertir a Real Brasileño:
        `))

        if (inferior_a_cero(cantidad_pesos)){
            continue
        }
       
        resultado = convertir_pesos_a_moneda(cantidad_pesos, "Real Brasileño", cambio_ars_brl)
        alert(resultado)
    }

    // CAMBIO DE OTRAS MONEDAS A PESO ARGENTINO
    else if ( opcion == 6 ){
        cantidad_moneda = parseFloat(prompt(`
==Dolar Americano a Pesos Argentinos

Escriba la cantidad de Dólares Americanos que desea convertir a Peso Argentino:
        `))

        if (inferior_a_cero(cantidad_moneda)){
            continue
        }

        resultado = convertir_moneda_a_pesos(cantidad_moneda, "Dólar Americano", cambio_usd_ars)
        alert(resultado)
    }
    
    else if ( opcion == 7 ){
        cantidad_moneda = parseFloat(prompt(`
== Euro a Pesos Argentinos

Escriba la cantidad de Euros que desea convertir a Peso Argentino:
        `))

        if (inferior_a_cero(cantidad_moneda)){
            continue
        }

        resultado = convertir_moneda_a_pesos(cantidad_moneda, "Euro", cambio_eur_ars);
        alert(resultado)
    }

    else if ( opcion == 8 ){
        cantidad_moneda = parseFloat(prompt(`
==Yen Japonés a Pesos Argentinos

Escriba la cantidad de Yen Japonés que desea convertir a Peso Argentino:
        `))

        if (inferior_a_cero(cantidad_moneda)){
            continue
        }

        resultado = convertir_moneda_a_pesos(cantidad_moneda, "Yen Japonés", cambio_jpy_ars)
        alert(resultado)
    }

    else if ( opcion == 9 ){
        cantidad_moneda = parseFloat(prompt(`
==Libra Esterlina a Pesos Argentinos

Escriba la cantidad de Libra Esterlina que desea convertir a Peso Argentino:
        `))

        if (inferior_a_cero(cantidad_moneda)){
            continue
        }

        resultado = convertir_moneda_a_pesos(cantidad_moneda, "Libra Esterlina", cambio_gbp_ars)
        alert(resultado)
    }

    else if ( opcion == 10 ){
        cantidad_moneda = parseFloat(prompt(`
==Real Brasileño a Pesos Argentinos

Escriba la cantidad de Real Brasileño que desea convertir a Peso Argentino:
        `))

        if (inferior_a_cero(cantidad_moneda)){
            continue
        }

        resultado = convertir_moneda_a_pesos(cantidad_moneda, "Real Brasileño", cambio_brl_ars)
        alert(resultado)
    }

    else if ( opcion == "salir" ){
        alert("Gracias por utilizar nuestro convertidor.")
        break
    }

    else {
        alert("Error -> Opción inválida: elija un número del 1 al 10 o 'salir' ")
        continue
    }
}