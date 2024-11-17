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

    //DECLARACIONES DE ATRIBUTOS PERO COMO ONJETOS
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

    if (miProfesor.edad === miProfesor.estatura) {
        console.log('Son Iguales');
    } else {
        console.log('Estos no son lo mismo');
    }

    //Arreglo de objetos

    const est1 = {
        nombre: 'Alejandro',
        apellido: 'Jimenez',
        edad: 25
    }

    const est2 = {
        nombre: 'Daniel',
        apellido: 'Teran',
        edad: 35
    }

    const est3 = {
        nombre: 'Viviana',
        apellido: 'Castillo',
        edad: 39
    }

    const arregloEstudiantes = [est1, est2, est3];

    console.log(arregloEstudiantes);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[1].nombre);

    const arregloEstudiantes2 = [
        { nombre: 'Carlos', apellido: 'Tobar', edad: 35 },
        { nombre: ' Anita', apellido: 'Teran', edad: 39 },
        { nombre: ' Andrea', apellido: 'Andrade', edad: 31 }
    ]

    console.log(arregloEstudiantes2);

    console.table(arregloEstudiantes2);

    //uso de pop
    const estudiante = arregloEstudiantes2.pop();

    console.log(estudiante);

    console.table(arregloEstudiantes2);

    //Desestructuración de arreglos
    const colores = ['Amarillo', 'Azul', 'Verde', 'Rojo', 'Rosado'];

    const [c1, c2, c3, c4, c5] = colores;

    console.log(c1);
    console.log(c5);
    console.log(c3);

    const [] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    const [m1, m2, m3, m4, m5, m6, m7, m8] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m8);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

    console.log(mes2);
    console.log(mes5);

    //DESESTRUCTURACIÓN DE OBJETOS

    console.log('desestructuracion de objetos')
    const automovil = {
        marca: 'Toyota',
        modelo: 'Tacoma',
        anio: 2024,
        color: 'rojo'
    }
    /*
    const { marca, modelo, anio, color } = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
    */

    desestructuracion(automovil);

    const { nombreP, raza, estatura } = { nombreP: 'Perro', raza: 'golden', estatura: 120 };
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //declaren un objeto con un atributo complejo (con un atributo de tipo objeto)
    // y vamos a desestructurar en especial el atributo objeto

    const universidad = {
        nombre: 'UCE',
        estudiantes: 10000000,
        rector: {
            nombreR: 'Nombre1',
            apellidoR: 'Apellido1'
        }
    }

    //En dos pasos
    /*const { estudiantes, rector } = universidad;
    const{nombreR} = rector;
    
    console.log(nombreR);
    */

    //En un solo paso
    const { estudiantes, rector: { nombreR, apellidoR } } = universidad;
    console.log(nombreR);
    console.log(apellidoR);


    const serie = {
        nombreS: 'One Piece',
        capitulos: 1122,
        Luffy: {
            padre: 'Monkey D. Dragon',
            simbolo: 'sombrero de paja'
        }
    }

    //En dos pasos
    /*
    const { nombreS, capitulos, Luffy } = serie;
    const { padre } = Luffy;

    console.log(capitulos);*/

    //En un paso
    const {nombreS,capitulos, Luffy:{padre, simbolo}} = serie;
    console.log(nombreS);
    console.log(capitulos);
    console.log(padre);
    console.log(simbolo);

}

const desestructuracion = ({ modelo, anio, color, marca }) => {
    console.log('Entro al metodo de desestructuracion')
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}

