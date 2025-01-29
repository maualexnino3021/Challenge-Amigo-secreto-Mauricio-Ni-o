// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de lista para almacenar los nombres de los amigos para iniciar proceso
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el input
    let inputAmigo = document.querySelector("#amigo");
    
    // Obtener el valor y eliminar espacios
    let nombre = inputAmigo.value.trim();

    // Validación: nombre no vacío
    if (nombre === "") {
        alert("Intentó agregar un nombre vacío, por favor, ingrese un nombre válido");
        console.log("Intento de añadir un nombre vacío");
        return;
    }

    // Validación: nombre duplicado
    if (amigos.includes(nombre)) {
        alert(`El nombre, ${nombre}, ya está en la lista, por favor, ingrese otro nombre diferente`);
        console.log("Intentó añadir un nombre duplicado");
        // Limpiar el input
        inputAmigo.value = ""
        return;
    }
    

    // Agregando cada nombre a la lista
    amigos.push(nombre);

    // Visualización en cónsola del navegador para monitorear en consola
    console.log(`Amigo añadido: ${nombre}`);

    // Actualizar la lista en pantalla
    mostrarLista();

    // Limpiar el input
    inputAmigo.value = "";
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let listaElement = document.querySelector("#listaAmigos");
    
    // Lista para almacenar los elementos HTML como strings
    let htmlLista = [];

    // Crear elementos de lista como strings
    amigos.forEach((amigo, index) => {
        htmlLista.push(`<li>${index + 1}. ${amigo}</li>`);
    });

    // Unir todo el contenido y actualizar el DOM
    listaElement.innerHTML = htmlLista.join("");
    console.log("Lista de amigos actualizada:", amigos);
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Validación si lista está vacía
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        console.log("Intento de sorteo con lista vacía");
        return;
    }

    // Número random decimal entre 0 y 1
    let randomDecimal = Math.random();

    //Longitud actual de la lista generada
    console.log(`Longitud actual de la lista: ${amigos.length}`)

    // Declaración como variable del índice aleatorio
    let indiceAleatorio = Math.floor(randomDecimal * amigos.length);

    // Visualización en consola del navegador del número decimal sin multiplicar
    console.log(`Número random decimal generado: ${randomDecimal}`);

    // Visualización en consola del índice entero de la lista creada generado
    console.log(`Índice generado de la lista: ${indiceAleatorio}`);

    // Declaración y función del nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Visualización en consola del navegador del amigo seleccionado
    console.log(`Amigo sorteado: ${amigoSorteado}`);

    // Declaración de la variable para mostrar resultado en el cuerpo del programa
    let resultadoElement = document.querySelector("#resultado");
    resultadoElement.textContent = `El nombre del amigo secreto sorteado es: ${amigoSorteado}`;

    // Limpieza de la lista de amigos una vez se genere y se muestre el amigo secreto
    amigos = [];

    // Limpieza de la pantalla una vez se genere y se muestre el amigo secreto
    mostrarLista();
}
