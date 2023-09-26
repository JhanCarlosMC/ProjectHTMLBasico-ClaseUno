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