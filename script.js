let contador = 0;

const textoContador = document.getElementById("numeroContador");
const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnDuplicar = document.getElementById("btnDuplicar");

function actualizarVista() {
  textoContador.textContent = contador;

  if (contador > 0) {
    textoContador.style.color = "#2ecc71";
  } else if (contador < 0) {
    textoContador.style.color = "#e74c3c";
  } else {
    textoContador.style.color = "#2c3e50";
  }
}

btnSumar.addEventListener("click", function() {
  contador = contador + 1;
  actualizarVista();
});

btnRestar.addEventListener("click", function() {
  contador = contador - 1;
  actualizarVista();
});

btnReiniciar.addEventListener("click", function() {
  contador = 0;
  actualizarVista();
});

btnDuplicar.addEventListener("click", function() {
  contador = contador * 2;
  actualizarVista();
});

actualizarVista();