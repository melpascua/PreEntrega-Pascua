let edad = parseInt(prompt("Ingrese su edad"));
let nombre;
let numeroDeTelefono;
let finalizar;

while (finalizar !== "Salir") {
    if (edad < 18) {
        alert("No puede acceder a nuestro sitio web. Usted debe de ser mayor de edad.");
        edad = prompt("Indique una edad válida")
    }
    if (edad >= 18) {
        alert("¡Bienvenido a nuestro sitio web!");

        nombre = prompt("Por favor, indique su nombre completo a continuación");
        if (nombre == "") {
            nombre = prompt("Por favor, ingrese un nombre válido");
        }

        numeroDeTelefono = parseInt(prompt("Por favor, indique su número de teléfono"));
        if (numeroDeTelefono == 0) {
            numeroDeTelefono = parseInt(prompt("Por favor, ingrese un número de teléfono válido"))
        }

        console.log("La edad ingresada es: " + edad);
        console.log("El nombre ingresado es: " + nombre);
        console.log("El número de teléfono ingresado es: " + numeroDeTelefono);

        finalizar = prompt("Si usted a ingresado todos los datos correctamente, finalice el programa escribiendo 'Salir' a continuación. Sino, simplemente deje el espacio en blanco.")
    }
}
console.log("Finalizó el programa")