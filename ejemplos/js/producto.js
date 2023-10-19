let productos = [
    {
        id: "1",
        nombre: "Producto 1",
        imagen: "img1.png",
        precio: 10000,
    },
    {
        id: "2",
        nombre: "Producto 2",
        imagen: "img2.png",
        precio: 25000,
    }
];

function agregarProductoCarrito(idProducto) {
    let carritoCompras = document.querySelector("#productos-carrito");
    let nombreProducto = "";
    let precioProducto = "";

    productos.forEach(producto => {
        if (producto.id === idProducto) {
            
            nombreProducto = producto.nombre;
            precioProducto = producto.precio;

        }
    });

    let newProductoCarrito = document.createElement("p");
    newProductoCarrito.setAttribute("class", "stilos-productos-carrito");
    newProductoCarrito.innerHTML = `<strong> Nombre del producto:</strong> ${nombreProducto} <br><strong>Precio:</strong> $${precioProducto}`;
    carritoCompras.appendChild(newProductoCarrito);
}

//--------------------------Cargar y Guardar IMG---------------------
const formularioImagen = document.getElementById('formulario-imagen');

formularioImagen.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    //Files[0] = contiene la lista de archivos seleccionados.
    const archivoImagen = document.getElementById('imagen').files[0];

    //Se verifica si el elemento es nulo/null
    if (archivoImagen) {
        //Instancia de FileReader para leer el contenido del archivo
        const lector = new FileReader();

        //Comienza a leer el contenido de la imagen(Una vez leido ejecuta el metodo onload)
        lector.readAsDataURL(archivoImagen);

        //El evento se activa cuando el archivo se ha cargado correctamente.
        lector.onload = function (evento) {
            //Obtenemos los datos del archivo cargado en forma de URL
            const imagenBase64 = evento.target.result; //Trae los datos en una cadena de caracteres ASCII
            //Mostramos la URL bsae64
            console.log(imagenBase64);

            // Almacena la imagen en el localStorage
            localStorage.setItem('imagen', imagenBase64);
        };

        alert('Imagen almacenada correctamente');

    } else {
        alert('Por favor, seleccione una imagen antes de enviar el formulario.');
    }
});

function cargarImgagen() {
    // Recuperar y mostrar la imagen al cargar la página
    const imagenMostrada = document.getElementById('imagen-mostrada');
    const imagenAlmacenada = localStorage.getItem('imagen');

    if (imagenAlmacenada) {
        imagenMostrada.src = imagenAlmacenada;
    }
}
	
