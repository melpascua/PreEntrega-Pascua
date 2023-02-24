const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

//*Se trae del HTML:

const carritoVacio = document.querySelector("#carrito-vacio");
let carritoConProductos = document.querySelector("#carrito-con-productos");
const acciones = document.querySelector("#acciones");
const compraRealizada = document.querySelector("#compra-realizada");

//*NO HACE FALTA COMPARAR EL IF CON NADA, PORQUE DEVOLVERÁ TRUE CUANDO EL CONST TENGA ALGO, NO SEA NULL. Cuando haya algún producto, queremos que se desactiven algunos elementos del HTML y se muestren otros y viseversa.

if (productosEnCarrito) {

    //*Mensaje de carrito vacío desaparece al haber productos en el carrito.
    carritoVacio.classList.add("disabled");

    //*Las acciones aparecen al haber un producto en el carrito, ya que se pueden realizar.
    acciones.classList.remove("disabled");

    //*Se le elimina la clase desactivado al haber productos en él.
    carritoConProductos.classList.remove("disabled");

    //*Se oculta el mensaje de compra realizada ya que aún no se ha realizado ninguna compra.
    compraRealizada.classList.add("disabled");



    //*Por cada producto seleccionado por el usuario, creará un div con la clase nombrada abajo y con los siguientes elementos dentro de él:

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-carrito-imagen">
            <div class="carrito-producto-nombre">
                <h3>Nombre</h3>
                <h4>${producto.nombre}</h4>
            </div>
            <div class="cantidad">
                <h3>Cantidad</h3>
                <p>${producto.cantidad}</p>
            </div>
            <div class="precio-carrito">
                <h3>Precio</h3>
                <p>$${producto.precio}</p>
            </div>
            <div class="subtotal">
                <h3>Subtotal</h3>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
        `

    });


} else {

};