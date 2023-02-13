class Libro {
    constructor(numeroDeSerie, titulo, autor, precio) {
        this.numeroDeSerie = numeroDeSerie;
        this.autor = titulo;
        this.titulo = autor;
        this.precio = Number(precio);
    }
}



//*Arrays
let librosDisponibles = [
    new Libro("HJSIU7542", "Rojo, BLanco y Sangre Azul", "Casey McQuiston", 3000),
    new Libro("PODS9758F", "Corazón de Tinta", "Cornelia Funke", 4000),
    new Libro("SDAGRE234", "Harry Potter y la Piedra Filosofal", "J.K. Rowling", 6000),
    new Libro("LOP789SJH", "Cazadores de Sombras 1: Ciudad de Hueso", "Cassandra Clare", 5000)
];


//*Funciones 
function elLibroExiste(numeroDeSerie) {
    return librosDisponibles.find((libro) => {
        return libro.numeroDeSerie === numeroDeSerie;
    })
}
function calcularTotal (precio) {
    return precio;
}

let librosDelUsuario = prompt("Ingrese el número de serie del libro que desea comprar. De lo contrario, ingrese 'SALIR'.");

while (librosDelUsuario !== "SALIR") {
    //*¿el libro está disponible?

    const libro = elLibroExiste(librosDelUsuario);


    if (libro !== undefined) {
        preguntaContinuar = prompt("El libro se ha añadido exitosamente a su carrito de compras ¿Desea continuar? Ingrese 'SALIR' si desea finalizar el programa.");

        //*Se pregunta al usuario si desea comprar algo más.

        if (preguntaContinuar === "SI") {
            librosDelUsuario = prompt("Ingrese el número de serie del libro que desea comprar. De lo contrario, ingrese 'NO'");
        }

        else if (librosDelUsuario === "SALIR") {
            alert("¡Gracias por elegirnos! ¡Vuelva pronto!")
            break;
        }

        const total = calcularTotal (libro, librosDelUsuario);

        alert(`${total}`);

    } else {
        alert("Ese libro no está disponible.");
    }

    //*se vuelve a preguntar al usuario lo que desea hacer
    librosDelUsuario = prompt("Ingrese el número de serie del libro que desea comprar. De lo contrario, ingrese 'SALIR'.");
}
