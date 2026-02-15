/* Proyecto: Aplicación de Consola - Módulo 4 */

// Mensaje de bienvenida y pedir nombre
let nombreUsuario = prompt("Ingresa tu nombre:");

// Validar que el nombre no esté vacío
while (nombreUsuario === "" || nombreUsuario === null) {
    nombreUsuario = prompt("Por favor, ingresa un nombre para continuar:");
}
alert("Bienvenido " + nombreUsuario);

// Funciones para las operaciones matemáticas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero";
    }
}

// Función para ejecutar las operaciones (Callback)
function ejecutarOperacion(operacion, v1, v2) {
    return operacion(v1, v2);
}

// Pedir los números al usuario
const numero1 = Number(prompt("Ingresa el primer número:"));
const numero2 = Number(prompt("Ingresa el segundo número:"));

// Validar que lo ingresado sean números
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: Debes ingresar números válidos.");
} else {

    // Guardar los resultados en un arreglo de objetos
    const misResultados = [
        { nombre: "Suma", total: ejecutarOperacion(sumar, numero1, numero2) },
        { nombre: "Resta", total: ejecutarOperacion(restar, numero1, numero2) },
        { nombre: "Multiplicación", total: ejecutarOperacion(multiplicar, numero1, numero2) },
        { nombre: "División", total: ejecutarOperacion(dividir, numero1, numero2) }
    ];

    // Mostrar los resultados en la consola
    console.log("Resultados del día:");
    misResultados.forEach(function(item) {
        console.log(item.nombre + ": " + item.total);
    });

    // Filtrar resultados mayores a 10
    let valoresFiltrados = [];
    for (let i = 0; i < misResultados.length; i++) {
        if (typeof misResultados[i].total === "number" && misResultados[i].total > 10) {
            valoresFiltrados.push(misResultados[i].total);
        }
    }
    console.log("Resultados mayores a 10: " + valoresFiltrados.join(", "));

    // Objeto con los datos del usuario y un saludo
    const datosUsuario = {
        nombre: nombreUsuario,
        saludar: function() {
            console.log("Cerrando sesión de: " + this.nombre);
        }
    };
    datosUsuario.saludar();
}
