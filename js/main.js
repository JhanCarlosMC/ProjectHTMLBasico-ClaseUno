//-----------------Condicionales

//comparacionNumeros(2, 3);

//Leer dos números y comparar si son iguales.
function comparacionNumeros(num1, num2) {

    if (num1 === num2) {
        console.log("Los numeros ingresados son iguales");
    } else {
        console.log("Los numeros ingresados NO son iguales");
    }
}

//diaSemana(1);

function diaSemana(valorDia) {

    switch (valorDia) {
        case 1:
            console.log("Lunes");
            break;

        case 2:
            console.log("Martes");
            break;

        case 3:
            console.log("Miercoles");
            break;

        default:
            console.log("Otro dia de la semana");
            break;
    }
}

//diaFinSemana("Miercoles");

function diaFinSemana(dia) {

    switch (dia) {
        case "Lunes":
            console.log("Dia entre semana");
            break;

        case "Martes":
            console.log("Dia entre semana");
            break;

        case "Sabado":
            console.log("Fin de semana");
            break;

        case "Domingo":
            console.log("Fin de semana");
            break;
        default:
            console.log("Otro dia entre semana");
            break;
    }
}

//-----------------Bucles

//ejemploWhile();
function ejemploWhile() {
    let contador = 1;
    let flag = false;

    while (flag) {
        console.log("Contador = " + contador);
        contador++;

        if (contador === 5) {
            flag = false;
        }
    }
}

//ejemploDoWile();
function ejemploDoWile() {
    let contador = 10;

    do {
        console.log("Contador = " + contador);
        contador--;
    } while (contador >= 10);
}

//ejemploFor();

function ejemploFor() {
    for (let i = 0; i < 10; i++) {
        console.log("Contador = " + i);
    }
}

//Leer un número y mostrar de manera descendente 
//todos los números inferiores a él.

//numDescendentesDoWHile(5);

function numDescendentesDoWHile(numero) {

    do {
        console.log("DoW " + numero);
        numero = numero - 1;
    } while (numero > 0);
}

//numDescendentesWHile(5);

function numDescendentesWHile(numero) {

    while (numero > 0) {
        console.log("W " + numero);
        numero = numero - 1;
    }
}

//numDescendentesFor(5);
function numDescendentesFor(numero) {

    for (let i = numero; i > 0; i--) {
        console.log("For " + i);
    }
}

//-----------------Arreglos
//arreglos();
function arreglos() {
    let edades = [19, 22, 15, 30];
    let logicos = [true, false, true, true, false];
    let listadoEstudiantes = [];

    // for(let i = 0; i< edades.length; i++){
    //     console.log("Indice "+ i + ": " + edades[i]);
    //     console.log(`Elemento ${i}: ${edades[i]}`);
    // }

    edades.forEach((element, index) => {
        console.log(`Elemento ${index}: ${element}`);
    });
}

//operacionesArrays();

function operacionesArrays() {
    let semana = ["Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    semana.push("Domingo");

    semana.push("Lunes");

    semana.pop();

    semana.unshift("Lunes");

    semana.unshift("Juernes");

    semana.shift();

    console.log(semana.indexOf("Domingo"));

    semana.forEach(element => {
        console.log(element);
    });
}

//sumaArreglos();
function sumaArreglos() {
    let arregloUno = [2, 13, 24, 42, 3];
    let arregloDos = [5, 1, 64, 3];
    let arregloResultado = [];

    if (arregloDos.length === arregloUno.length) {
        for (let i = 0; i < arregloDos.length; i++) {

            arregloResultado.push(arregloUno[i] + arregloDos[i]);

        }
    } else {

        if (arregloDos.length < arregloUno.length) {
            for (let i = 0; i < arregloDos.length; i++) {

                arregloResultado.push(arregloUno[i] + arregloDos[i]);
                console.log("Uno");

            }
        } else {
            for (let i = 0; i < arregloUno.length; i++) {

                arregloResultado.push(arregloUno[i] + arregloDos[i]);
                console.log("Dos");

            }
        }
    }

    arregloResultado.forEach(element => {
        console.log(element);
    });
}

// ejemploMatriz();
function ejemploMatriz() {
    let matrizUno = [
        [1, 2, 3], [4, 5, 6]
    ];
    let cadena = "";
    // console.log(matrizUno[1][2]);

    for (let i = 0; i < matrizUno.length; i++) {
        for (let j = 0; j < matrizUno[0].length; j++) {

            cadena = cadena + matrizUno[i][j] + " ";
            console.log("i=" + i + " j=" + j + " Elemento=" + matrizUno[i][j]);

        }
        console.log(cadena);
        cadena = "";
    }
}

//-----------------Objetos

//ejemploObjetos();
function ejemploObjetos() {

    let personaUno = {
        nombre: "Jhan",
        edad: 22,
        ciudad: "Armenia",
        pais: "Colombia",
        gafas: true,
    };

    personaUno.altura = 182;

    console.log(personaUno);
}

// ejemploClase();
function ejemploClase() {

    class Estudiante {
        constructor(nombre, edad, estatura, peso, id) {
            this.nombre = nombre;
            this.edad = edad;
            this.estatura = estatura;
            this.peso = peso;
            this.id = id;
        }
    }

    let estudianteUno = new Estudiante();

    //console.log(Object.keys(estudianteUno));

    //console.log(Object.values(estudianteUno));

    for (const i in estudianteUno) {
        console.log(i + ": " + estudianteUno[i]);
    }
}

//-----------------Funciones

//Funcion sin retorno y sin parametros
//ejemploFuncionBasica(); //Llamado

function ejemploFuncionBasica() {
    console.log("Funcion sin retorno y sin parametros");
}

//Funcion sin retorno y con parametros
const valorUno = 20

//ejemploFuncionParametros(valorUno, 15); //Llamado

function ejemploFuncionParametros(numeroUno, numeroDos) {
    console.log(numeroUno + numeroDos);
}

//Funcion con Retorno

//let retorno = ejemploFuncionRetorno("David"); //Llamado
//console.log(retorno);

function ejemploFuncionRetorno(nombre) {
    let mensaje = "";

    if (nombre === "Jhan") {
        mensaje = "Los nombres son iguales";
    } else {
        mensaje = "Los nombres NO son iguales";
    }

    return mensaje;
}

//-----------------Funciones en Flecha

//Sin parametros
const saludo = () => console.log("Hola");
saludo();

//Con parametros
const saludoPersonalizado = (nombre) => console.log("Hola " + nombre);
saludoPersonalizado("Jhan");

//Con mas codigo
const cicloEjemplo = a => {
    for (let i = 0; i < a; i++) {
        console.log(i);
    }
};
//cicloEjemplo(4);

//Con Retorno
const multiplicacion = (a, b) => a*b;

let result = multiplicacion(2,5)

console.log(result);