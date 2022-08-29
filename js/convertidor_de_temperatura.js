



//FUNCIONES
function convertir_temperatura(unidad, temperatura, unidad_a_convertir) {

    if (typeof temperatura == "number") {

        // celsius a X unidad
        if (unidad == "celsius" && unidad_a_convertir == "fahrenheit") {
            alert(`${temperatura} grados ${unidad} a ${unidad_a_convertir} = ${(temperatura * 9 / 5) + 32} F°`);
        }
        else if (unidad == "celsius" && unidad_a_convertir == "kelvin") {
            alert(`${temperatura} grados ${unidad} a ${unidad_a_convertir} = ${(temperatura + 273.15).toFixed(2)} K° `);
        }

        // fahrenheit a X unidad
        else if (unidad == "fahrenheit" && unidad_a_convertir == "celsius") {
            alert(`${temperatura} grados ${unidad} a ${unidad_a_convertir} = ${((temperatura - 32) * 5 / 9).toFixed(2)} C°`);
        }
        else if (unidad == "fahrenheit" && unidad_a_convertir == "kelvin") {
            alert(`${temperatura} grados ${unidad} a ${unidad_a_convertir} = ${((temperatura - 32) * 5 / 9 + 273.15).toFixed(2)} K°`);
        }

        // kelvin a X unidad
        else if (unidad == "kelvin" && unidad_a_convertir == "celsius") {
            alert(`${temperatura} grados ${unidad} a ${unidad_a_convertir} = ${(temperatura - 273.15).toFixed(2)} C°`);
        }
        else if (unidad == "kelvin" && unidad_a_convertir == "fahrenheit") {
            alert(`${temperatura} grados ${unidad} a ${unidad_a_convertir} = ${((temperatura - 273.15) * 9 / 5 + 32).toFixed(2)} `);
        }

    }
}

while (true) {
    let unidad = prompt(`
==CONVERTIDOR DE TEMPERATURAS==    

1- Elije la unidad que deseas convertir:
    Celsius - Fahrenheit - Kelvin

Escriba 'esc' para salir del programa.
`);
    unidad = unidad.toLowerCase();

    if (unidad == 'esc') {

        alert("Gracias por usar este convertidor");
        break

    }

    let unidad_a_convertir = prompt(`
2- Elije la unidad hacia la que deseas convertir:
    Celsius - Fahrenheit - Kelvin

`);
    unidad_a_convertir = unidad_a_convertir.toLowerCase();

    let temperatura = parseFloat(prompt(`
3 - Ingrese la temperatura que desea convertir:
`))

    if ((unidad == "celsius" && temperatura < -273) ||
        (unidad == "fahrenheit" && temperatura < -460) ||
        (unidad == "kelvin" && temperatura < 0)) {
        alert(`
    Error -> temperatura Inválida: es menor al cero absoluto
    Celsius: 273
    Fahrenheit: -460
    Kelvin: 0
        `)
    }

    else if (unidad == "" || unidad_a_convertir == "") {
        alert("Error -> el usuario ingresó datos vacíos.");
    }

    
    convertir_temperatura(unidad, temperatura, unidad_a_convertir)
}

