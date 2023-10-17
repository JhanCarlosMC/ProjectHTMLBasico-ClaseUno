//Obtener elemento por medio de ID
let parrafoObtenidoId = document.getElementById("parrafo1");
// console.log(parrafoObtenidoId);

//Obtener elemento por medio de Clase
let parrafoObtenidoClass = document.getElementsByClassName("classParrafo");
// console.log(parrafoObtenidoClass);

let arrayClass = Array.from(parrafoObtenidoClass);

// console.log(arrayClass);

//Obtener elemento por medio de QuerySelector
let parrafoQuerySelector = document.querySelector(".classParrafo");
// console.log(parrafoQuerySelector);

//Modificacion de etiquetas HTML
const parrafoDos = document.getElementById("parrafo2");
const header = document.getElementById("header");

parrafoDos.textContent = "Parrafo modificado por meido de JS";
header.innerHTML = "<h1> Titulo Incrustado por JS</h1>";

header.style.backgroundColor = "red";

//Modificacion de atributos de etiquetas
parrafoObtenidoId.setAttribute("class", "classParrafo");

const enlace = document.querySelector("a");
enlace.setAttribute("href", "https://es.wikipedia.org/wiki/Wikipedia:Bienvenidos");

const imagen = document.querySelector("img");
// console.log(imagen.getAttribute("alt"));

//Crear y agregar elementos HTML
function crearSeccion() {
    const contenedor = document.createElement("div");
    contenedor.innerHTML = "<h2> Seccion N</h2>";

    document.body.appendChild(contenedor);

    contenedor.style.backgroundColor = "green";
    contenedor.style.margin = "5px";
    contenedor.setAttribute("class", "seccion");

}

function eliminarStyle() {
    const contenedor = document.querySelector(".seccion");

    contenedor.style.backgroundColor = "";

    contenedor.removeAttribute("style");
}

const imagenDelete = document.querySelector("img");
imagenDelete.remove();


//-------------------------Eventos-------------
const parrafoEvent = document.getElementById("parrafoOculo");
parrafoEvent.addEventListener("dblclick", () => {
    parrafoEvent.style.color = "green";
    console.log("click activado");
});

header.addEventListener("mouseover", mouseEventsOver);

function mouseEventsOver(){
    header.style.backgroundColor = "green";
    header.style.border = "";

}

header.addEventListener("mouseout", mouseEventsOut);

function mouseEventsOut(){
    header.style.backgroundColor = "red";

}

//----------Eventos formularios----------
const formularioLogin = document.getElementById("login");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.getElementById("user").value;

    parrafoEvent.innerHTML = " Bienvenido "+ user;
    localStorage.setItem("usuario", user);

    // window.location.href = '/index.html'

    formularioLogin.reset();
});


function recuperarDatos(){
    const nombreUsuario = localStorage.getItem("usuario");

    console.log("Dato recuperado: "+ nombreUsuario);
}