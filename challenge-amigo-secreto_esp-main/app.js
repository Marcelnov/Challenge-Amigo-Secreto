// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/**
 * Esta función se encarga de añadir un nuevo amigo a la lista.
 *
 * 1. Obtiene el nombre del amigo del campo de texto "amigo".
 * 2. Verifica si el nombre está vacío. Si lo está, muestra una alerta y termina la función.
 * 3. Añade el nombre al array "amigos" que contiene la lista de todos los amigos.
 * 4. Limpia el campo de texto "amigo" para que el usuario pueda escribir el siguiente nombre.
 * 5. Llama a la función "actualizarListaAmigos()" para que la lista que se muestra en la página web se actualice con el nuevo nombre.
 */

function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim(); // Eliminar espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    nombreInput.value = ""; // Limpiar el campo de entrada
    actualizarListaAmigos();


/**
 * Actualiza la lista de amigos que se muestra en la página web.
 *
 * 1. Obtiene una referencia al elemento HTML que contiene la lista de amigos (probablemente un <ul> o <ol>).
 * 2. Limpia el contenido HTML de la lista para evitar duplicados.
 * 3. Itera sobre el array 'amigos' que contiene los nombres de los amigos.
 * 4. Para cada amigo:
 *    - Crea un nuevo elemento <li>.
 *    - Establece el texto del elemento <li> con el nombre del amigo.
 *    - Añade el elemento <li> a la lista HTML.
 */



}
// Nuestro contenedor de nombres
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar
//Recorrer la lista de amigos y agregar 
// un elemento de lista "li" por cada uno en nuestro contenedor de nombres
    amigos.forEach(amigo => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        // en este punto estamos agregando nuestro listadode amigos
        // a nuestro contenedor de nombres
        listaAmigos.appendChild(nuevoElemento);
    });
}



/**
 * Realiza el sorteo del amigo secreto y muestra el resultado en la página web.
 *
 * 1. Verifica si hay amigos en la lista. Si no hay amigos, muestra una alerta y termina la función.
 * 2. Genera un índice aleatorio dentro del rango de la lista de amigos.
 * 3. Obtiene el nombre del amigo correspondiente al índice aleatorio.
 * 4. Muestra el nombre del amigo sorteado en el elemento HTML con el id "resultado".
 */

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `¡Tu amigo secreto es: <span>${amigoSorteado}</span>!`;
}
