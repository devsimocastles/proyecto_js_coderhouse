


function comprobar_peso(peso) {
    if (typeof peso == "number") {
        return !(peso < 0);
    } else return false;
}


function convertir_unidad(unidad, peso, unidad_a_convertir) {
    if (comprobar_peso(peso)) {

        //kilogramos a X unidad
        if (unidad == "kilogramo" && unidad_a_convertir == "gramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 1000)} gramos`);
        }
        else if (unidad == "kilogramo" && unidad_a_convertir == "tonelada") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 1000).toFixed(3)} toneladas`);
        }
        else if (unidad == "kilogramo" && unidad_a_convertir == "onza") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 35.274)} onzas`);
        }
        else if (unidad == "kilogramo" && unidad_a_convertir == "libra") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 2.205)} libras`);
        }
        else if (unidad == "kilogramo" && unidad_a_convertir == "miligramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 1000000)} miligramos`);
        }


        //gramo a X unidad
        if (unidad == "gramo" && unidad_a_convertir == "kilogramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 1000).toFixed(3)} kilogramos`);
        }
        else if (unidad == "gramo" && unidad_a_convertir == "tonelada") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 1000000).toFixed(3)} toneladas`);
        }
        else if (unidad == "gramo" && unidad_a_convertir == "onza") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 28.35).toFixed(3)} onzas`);
        }
        else if (unidad == "gramo" && unidad_a_convertir == "libra") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 453.6).toFixed(3)} libras`);
        }
        else if (unidad == "gramo" && unidad_a_convertir == "miligramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 1000)} miligramos`);
        }


        //toneladas a X unidad 
        if (unidad == "tonelada" && unidad_a_convertir == "kilogramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 1000)} kilogramos`);
        }
        else if (unidad == "tonelada" && unidad_a_convertir == "gramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 1000000)} gramos`);
        }
        else if (unidad == "tonelada" && unidad_a_convertir == "onza") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 35270)} onzas`);
        }
        else if (unidad == "tonelada" && unidad_a_convertir == "libra") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 2205)} libras`);
        }
        else if (unidad == "tonelada" && unidad_a_convertir == "miligramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 1000000000)} miligramos`);
        }


        // onza a X unidad
        if (unidad == "onza" && unidad_a_convertir == "kilogramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 35.274)} kilogramos`);
        }
        else if (unidad == "onza" && unidad_a_convertir == "gramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 28.35)} gramos`);
        }
        else if (unidad == "onza" && unidad_a_convertir == "tonelada") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 35270).toFixed(3)} toneladas`);
        }
        else if (unidad == "onza" && unidad_a_convertir == "libra") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 16).toFixed(3)} libras`);
        }
        else if (unidad == "onza" && unidad_a_convertir == "miligramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 28350)} miligramos`);
        }


        // libra a X unidad
        if (unidad == "libra" && unidad_a_convertir == "kilogramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 2.205).toFixed(3)} kilogramos`);
        }
        else if (unidad == "libra" && unidad_a_convertir == "gramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 453.6)} gramos`);
        }
        else if (unidad == "libra" && unidad_a_convertir == "tonelada") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 453.6).toFixed(3)} toneladas`);
        }
        else if (unidad == "libra" && unidad_a_convertir == "onza") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 16)} onzas`);
        }
        else if (unidad == "libra" && unidad_a_convertir == "miligramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso * 453600)} miligramos`);
        }


        // miligramos a X unidad
        if (unidad == "miligramos" && unidad_a_convertir == "kilogramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 1000000).toFixed(3)} kilogramos`);
        }
        else if (unidad == "miligramos" && unidad_a_convertir == "gramo") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 1000).toFixed(3)} gramos`);
        }
        else if (unidad == "miligramos" && unidad_a_convertir == "tonelada") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 1000000000).toFixed(3)} toneladas`);
        }
        else if (unidad == "miligramos" && unidad_a_convertir == "onza") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 28350).toFixed(3)} onzas`);
        }
        else if (unidad == "miligramos" && unidad_a_convertir == "libras") {
            alert(`${peso} ${unidad}s a ${unidad_a_convertir}s = ${(peso / 453600).toFixed(3)} libras`);
        }
    }
}




while (true) {

    let unidad = prompt(`
    ==CONVERSOR DE PESO==    
    
    1- Escribe la unidad que deseas convertir:
    kilogramo - gramo - miligramo - tonelada - onza - libra
    
    Escriba 'esc' para salir del programa.
    `);

    unidad = unidad.toLowerCase();

    if (unidad == "esc") {
        alert("Gracias por usar el programa");
        break;
    }

    if (unidad != "kilogramo" && unidad != "gramo" && unidad != "tonelada" && unidad != "onza" && unidad != "libra" && unidad != "miligramo") {
        alert("Error -> el usuario ingresó una unidad inexistente.");
        continue
    }


    let peso = parseFloat(prompt("2- Escribe la cantidad de masa que vas a convertir:"));
    console.log(peso);
    if (peso < 1) {
        alert("Error -> el usuario ingresó una masa inferior a 1");
        continue
    }
    else if (isNaN(peso)) {
        alert("Error -> el usuario no ingresó una masa");
        continue
    }


    let unidad_a_convertir = prompt(`
    3- Escribe la unidad hacia la que deseas convertir:
    kilogramo - gramo - miligramo - tonelada - onza - libra
    `);

    if (unidad == unidad_a_convertir) {
        alert("Error -> el usuario intentó convertir una unidad a sí misma")
        continue
    }

    convertir_unidad(unidad, peso, unidad_a_convertir);
}