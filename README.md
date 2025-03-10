<h1>Challenger-Amigo-Secreto</h1> 
# Proyecto Amigo Secreto 🎉

Este es un proyecto web simple y divertido para organizar sorteos de "Amigo Secreto". Los usuarios pueden agregar los nombres de sus amigos, realizar un sorteo aleatorio y ver los resultados en tiempo real. El proyecto está construido utilizando tecnologías web básicas: HTML, CSS y JavaScript.

## Descripción del Proyecto

El proyecto "Amigo Secreto" permite a los usuarios:
- Agregar nombres de amigos a una lista.
- Validar que los nombres ingresados sean correctos (solo letras y espacios).
- Mostrar los nombres ingresados en una lista visual debajo del campo de entrada.
- Realizar un sorteo aleatorio para elegir al amigo secreto.
- Evitar que los amigos ya sorteados sean seleccionados nuevamente.
- Visualizar el resultado del sorteo directamente en la página.

Este proyecto es ideal para pequeñas reuniones o eventos donde los participantes desean organizar un sorteo de "Amigo Secreto" de manera simple y rápida.

## Funcionalidades

### 1. **Agregar Amigos** 📝
- Los usuarios pueden ingresar los nombres de los participantes en el campo de texto y hacer clic en el botón **"Añadir"**.
- Los nombres ingresados se muestran automáticamente en una lista debajo del campo de entrada.
  
### 2. **Validar Entrada** ✅
- Se valida que los nombres ingresados contengan solo letras y espacios. Si el nombre contiene números o caracteres especiales, se muestra una alerta advirtiendo que se debe ingresar un nombre válido.
- Si el campo de entrada está vacío al hacer clic en **"Añadir"**, se mostrará una alerta pidiendo que se ingrese un nombre.

### 3. **Visualizar Lista de Amigos** 👥
- Los nombres de los amigos ingresados aparecen en una lista, uno debajo del otro, en un estilo personalizado (en **negrita** y color **azul**).
- Cada nombre ingresado se muestra con un número de índice para mayor claridad.

### 4. **Sorteo Aleatorio** 🎲
- Al hacer clic en el botón **"Sortear Amigo"**, se selecciona aleatoriamente un nombre de la lista de amigos y se muestra el resultado en la página.
- El nombre sorteado se elimina de la lista para evitar que sea seleccionado nuevamente.

### 5. **No Repetición de Sorteados** 🚫
- Una vez que un amigo ha sido sorteado, se elimina de la lista de nombres para garantizar que no pueda volver a ser seleccionado en sorteos posteriores.

### 6. **Diseño Responsivo** 📱
- El proyecto cuenta con un diseño responsivo que se adapta a dispositivos móviles, tablets y pantallas de diferentes tamaños.

## Estructura del Proyecto

La estructura de archivos del proyecto es la siguiente:

- index.html # Archivo principal que estructura la página web.
- style.css # Archivo de hojas de estilo CSS que define el diseño visual de la página.
- app.js # Archivo JavaScript que controla la lógica de interacción del usuario.
- assets/ # Carpeta de recursos que contiene las imágenes utilizadas en el proyecto.
- amigo-secreto.png # Imagen representativa para el encabezado del proyecto.
- play_circle_outline.png # Ícono de "play" para el botón de sorteo.
- README.md # Este archivo de documentación del proyecto.

¡Gracias por usar el proyecto "Amigo Secreto"! Esperamos que disfrutes organizando tus sorteos con esta sencilla aplicación. 🎉!
