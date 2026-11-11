// 1. Creamos la variable contador
let contador = 0;

// 2. Seleccionamos los elementos de la pantalla
const textoContador = document.getElementById("numeroContador");
const mensajeHumor = document.getElementById("mensajeHumor");
const btnAccion = document.getElementById("btnAccion");
const cuerpoWeb = document.body;

// 3. Programamos lo que pasa al hacer clic en el botón
btnAccion.addEventListener("click", function() {
    // Sumamos 1 al contador cada vez que hacen clic
    contador = contador + 1;
    
    // Mostramos el número actualizado en la pantalla
    textoContador.textContent = contador;

    // 4. AQUÍ ENTRA LA MAGIA DE LAS CONDICIONES (if / else)
    if (contador < 5) {
        // Si es menor a 5:
        mensajeHumor.textContent = "Calentando motores...";
        cuerpoWeb.style.backgroundColor = "#3498db"; // Azul
    } 
    else if (contador <= 10) {
        // Si está entre 5 y 10:
        mensajeHumor.textContent = "¡Vas a toda máquina!";
        cuerpoWeb.style.backgroundColor = "#2ecc71"; // Verde
    } 
    else {
        // Si pasa de 10:
        mensajeHumor.textContent = "¡Demasiada velocidad! ¡Para un poco!";
        cuerpoWeb.style.backgroundColor = "#e74c3c"; // Rojo
    }
});