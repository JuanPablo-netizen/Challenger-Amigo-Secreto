// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío y que solo contenga letras y espacios
    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
    } else if (!nombreValido) {
        alert("Por favor, ingrese un nombre válido. Solo se permiten letras.");
    } else {
        // Agregar el nombre a la lista de amigos
        amigos.push(nombre);
        actualizarLista();
    }

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado en la lista de resultados
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;

        // Eliminar el amigo sorteado del array para que no se repita
        amigos.splice(indiceAleatorio, 1);
        
        // Actualizar la lista de amigos después del sorteo
        actualizarLista();
    }
}
