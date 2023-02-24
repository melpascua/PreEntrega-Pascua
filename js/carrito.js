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


    
} else {

};