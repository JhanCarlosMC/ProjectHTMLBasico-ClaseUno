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