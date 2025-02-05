// Obtener el modal y el botón de apertura
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en la 'X'
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
