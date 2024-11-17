const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento, color) => {
    document.getElementById(idelemento).style.color = color;
}

const cambiarTamanio = (idelemento, tamanio) => {
    document.getElementById(idelemento).style.fontSize = tamanio;
}

const agregarElemento = (idelemento, elementohtml) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementohtml
}

const conceptosJS = () => {
    /*TIPOS DE VARIABLES EN JS
     var: globales, ya no es comunmente usado
     let: local, dentro del bloque {}, no permit declarar la misma variabe en un bloque
     const: variables cuyo valor no cambian
    */

    let nombre = "Alejandro";
    let numero1 = 10;
    let nuemro2 = 10.1;
    const PI = 3.14;

    console.log(nombre);
    console.log(numero1);
    console.log(PI);
    console.log("Entro al metodo de calculo");

    /*Declaración de arreglos*/
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

    console.log(diasSemana)
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);

    console.log(diasSemana[5]);
    //dentro de JS el concepto de nulo o no existencia: undefined

    //null!== undefined

    let valor = null;
    console.log(valor) //este con el de abajo no es lo mismo
    //     console.log(valor1) // este con el de arriba no es lo mismo

    /*
    Para comparacione en JS
     ===
     !==
     */

    //guardar al final del arreglo
    diasSemana.push('Sabado');
    console.log(diasSemana)

    //guardar al inicio del arreglo
    diasSemana.unshift('Dias');
    console.log(diasSemana)

    const numeroImpares = [1, 3, 5, 7, 9, 11];
    console.log(numeroImpares);

    const numeroPares = [2, 4, 6, 8, 10];
    console.log(numeroPares);

    const numeros = numeroImpares.concat(numeroPares);
    console.log(numeros);

    //SENTENCIAS DE CONTROL
    for (const dia of diasSemana) {
        console.log(dia)
        if (dia === 'Viernes') {
            console.log('Al fin Viernes');
        } else {
            console.log('Aun no llega viernes');
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: 'Alejandro',
        apellido: 'Jimenez',
        edad: 23,
        genero: 'Masculino',
        ciudadNacimiento: 'Quito'
    }

    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);

    if (miEstudiante.edad === 33) {
        console.log('Tiene 33')
    } else {
        console.log('Ya no tiene 33')
    }

    miEstudiante.apellido = 'Jimenez Loor';
    console.log(miEstudiante);

    //DECLARACIONES DE ATRIBUTOS PERO COMO OBJETOS
    const miProfesor = {
        nombre: 'Daniel',
        apellido: 'Tobart',
        edad: null,
        direccion: {
            calle: 'Avenida America',
            casa: '120',
            barrio: 'Rumipamba'
        }
    }

    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.calle);

    miProfesor.direccion.calle = '10 de Agosto';

    console.log(miProfesor);
    console.log(miProfesor.edad);
    console.log(miProfesor.estatura);

    if(miProfesor.edad === miProfesor.estatura){
        console.log('Son Iguales');
    }else{
        console.log('Estos no son lo mismo');
    }
}