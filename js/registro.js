class Usuario {
    constructor(nombre, apellidos, email, password, genero) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.genero = genero;
    }
}

let listUsuarios = [];
listUsuarios = JSON.parse(localStorage.getItem("listUsuarios"));

const formRegistro = document.getElementById("registro");

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreNewUser = document.getElementById("name").value;
    const apellidoNewUser = document.getElementById("apellidos").value;
    const emailNewUser = document.getElementById("email").value;
    const passwordNewUser = document.getElementById("pass").value;
    const generoNewUser = document.getElementById("genero").value;

    let newUsuario = new Usuario(nombreNewUser, apellidoNewUser, emailNewUser, passwordNewUser, generoNewUser);

    listUsuarios.push(newUsuario);
    console.log(listUsuarios);

    localStorage.setItem("listUsuarios", JSON.stringify(listUsuarios));

    formRegistro.reset();
    window.location.href = "/login.html";
});

function mostrarUsuarios(){
    console.log(listUsuarios);
}