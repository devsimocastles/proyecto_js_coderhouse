


function comprobar_longitud(longitud) {
    if (typeof longitud == "number") {
        return !(longitud < 0);
    } else return false;
}


function convertir_unidad(unidad, longitud, unidad_a_convertir) {
    if (comprobar_longitud(longitud)) {

        //metros a X unidad
        if (unidad == "metro" && unidad_a_convertir == "pie") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 3.281)} pies`);
        }
        else if (unidad == "metro" && unidad_a_convertir == "pulgada") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 39.37)} pulgadas`);
        }
        else if (unidad == "metro" && unidad_a_convertir == "milla") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 1609).toFixed(3)} millas`);
        }
        else if (unidad == "metro" && unidad_a_convertir == "yarda") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 1.094)} yardas`);
        }


        //pie a X unidad
        if (unidad == "pie" && unidad_a_convertir == "metro") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 3.281).toFixed(3)} metros`);
        }
        else if (unidad == "pie" && unidad_a_convertir == "pulgada") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 12)} pulgadas`);
        }
        else if (unidad == "pie" && unidad_a_convertir == "milla") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 5280).toFixed(3)} millas`);
        }
        else if (unidad == "pie" && unidad_a_convertir == "yarda") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 3).toFixed(3)} yardas`);
        }


        //pulgadas a X unidad 
        if (unidad == "pulgada" && unidad_a_convertir == "metro") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 39.37).toFixed(3)} metros`);
        }
        else if (unidad == "pulgada" && unidad_a_convertir == "pie") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 12).toFixed(3)} pies`);
        }
        else if (unidad == "pulgada" && unidad_a_convertir == "milla") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 63360).toFixed(8)} millas`);
        }
        else if (unidad == "pulgada" && unidad_a_convertir == "yarda") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 36).toFixed(3)} yardas`);
        }


        // Milla a X unidad
        if (unidad == "milla" && unidad_a_convertir == "metro") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 1609)} metros`);
        }
        else if (unidad == "milla" && unidad_a_convertir == "pie") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 5280)} pies`);
        }
        else if (unidad == "milla" && unidad_a_convertir == "pulgada") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 63360)} pulgadas`);
        }
        else if (unidad == "milla" && unidad_a_convertir == "yarda") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 1760)} yardas`);
        }


        // Yarda a X unidad
        if (unidad == "yarda" && unidad_a_convertir == "metro") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 1.094).toFixed(2)} metros`);
        }
        else if (unidad == "yarda" && unidad_a_convertir == "pie") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 3)} pies`);
        }
        else if (unidad == "yarda" && unidad_a_convertir == "pulgada") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud * 36)} pulgadas`);
        }
        else if (unidad == "yarda" && unidad_a_convertir == "milla") {
            alert(`${longitud} ${unidad}s a ${unidad_a_convertir}s = ${(longitud / 1760).toFixed(8)} millas`);
        }
    }
}




while (true) {

    let unidad = prompt(`
    ==CONVERSOR DE LONGITUD==    
    
    1- Escribe la unidad que deseas convertir:
    Metro - Pie - Pulgada - Milla - Yarda
    
    Escriba 'esc' para salir del programa.
    `);

    unidad = unidad.toLowerCase();

    if (unidad == "esc") {
        alert("Gracias por usar el programa");
        break;
    }

    if (unidad != "metro" && unidad != "pie" && unidad != "pulgada" && unidad != "milla" && unidad != "Yarda") {
        alert("Error -> el usuario ingresó una unidad inexistente.");
        continue
    }


    let longitud = parseFloat(prompt("2- Escribe la longitud que vas a convertir:"));
    console.log(longitud);
    if (longitud < 1) {
        alert("Error -> el usuario ingresó una longitud inferior a 1");
        continue
    }
    else if (isNaN(longitud)) {
        alert("Error -> el usuario no ingresó una longitud");
        continue
    }


    let unidad_a_convertir = prompt(`
    3- Escribe la unidad hacia la que deseas convertir:
    Metro - Pie - Pulgada - Milla - Yarda
    `);

    if (unidad == unidad_a_convertir) {
        alert("Error -> el usuario intentó convertir una unidad a sí misma")
        continue
    }

    convertir_unidad(unidad, longitud, unidad_a_convertir);
}