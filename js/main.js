//*OBJETOS


//*ARRAYS

const listaDeProductos = [
    {
        id: "SASD4",
        nombre: "Cafetera de Filtro",
        precio: 70,
        imagen: "../img/maquina-de-cafe-de-filtro (2).png"
    },

    {
        id: "SDSE6",
        nombre: "Cafetera Express",
        precio: 100,
        imagen: "../img/maquina-de-cafe-express.png"
    },

    {
        id: "YGHD7",
        nombre: "Cafetera Molinillo",
        precio: 85,
        imagen: "../img/maquinade-de-cafe-molinillo.png"
    },

    {
        id: "KIOP6",
        nombre: "Café Molido",
        precio: 25,
        imagen: "../img/cafe-molido.png"
    },

    {
        id: "OPSY2",
        nombre: "Granos de Café",
        precio: 30,
        imagen: "../img/Sin título-1.png"
    },
    {
        id: "ODYV5",
        nombre: "Cápsulas",
        precio: 40,
        imagen: "../img/capsulas-nespresso.png"
    },
    {
        id: "OTFC7",
        nombre: "Vasos Reutilizables",
        precio: 20,
        imagen: "../img/vasos-reutilizables.png"
    },
    {
        id: "YUCH0",
        nombre: "Tazas Personalizables",
        precio: 30,
        imagen: "../img/taza-reutilizable.png"
    },
    {
        id: "JFUC4",
        nombre: "Almacen",
        precio: 15,
        imagen: "../img/dulce-de-leche.png"
    }
];

let carritoDeCompras = [];

//*DOM 

let botones = document.querySelectorAll(".boton");

//*FUNCIONES


//*esta función reemplaza el HTML y coloca todos los productos en el de forma mucho más dinámica. Recorre cada producto del array "listaDeProductos" y los crea en el html.
function cargarProductos() {
    const contenedorProductos = document.getElementById("contenedor-tienda");

    listaDeProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre} $${producto.precio}</h3>
        <button class="boton" id="${producto.id}">Añadir al carrito</button>`;
        contenedorProductos.append(div);
    });
    botonesAgregar();
};

//*detección de click de los botones para agregar al carrito. Se selecciona a cada boton y se le agrega la propiedad. 
function botonesAgregar() {
    botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
};

//*Al presionar el botón, saldrá el ID del producto y esta función recorrerá el array en busca que el primer ID igual a este. y luego se pushea a un Array
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;

    const agregandoProducto = listaDeProductos.find(producto => producto.id === idBoton);

    //*Some verificará si ya hay algún producto que coincida con el que se está agregando al array para poder sumar cantidad en vez de agregar un objeto nuevo al array, una entidad nueva. Estos estarán juntos. Si some devuelve false, pusheara el producto.

    if (carritoDeCompras.some(producto => producto.id === idBoton)) {
        
        const encontrarIndex = carritoDeCompras.findIndex(producto => producto.id === idBoton);
        carritoDeCompras[encontrarIndex].cantidad++;
    }
    else {
        //*Se le asgina una propiedad nueva a los productos
        agregandoProducto.cantidad = 1;
        
        carritoDeCompras.push(agregandoProducto);
    }


    //*Ahora guardamos el array carritoDeCompras en el local storage para poder enviarlo a la página de carrito

    localStorage.setItem("productos-en-carrito", JSON.stringify(carritoDeCompras));
};


//*INICIO DEL PROGRAMA

botonesAgregar();

cargarProductos();
