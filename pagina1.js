// Función: guarda el nombre y cambia de página
function guardar() {
 const nombre = document.getElementById("nombre").value;
 sessionStorage.setItem("nombre", nombre); // guarda en la bodega
 window.location.href = "pagina2.html"; // cambia de página
}
// Evento: al hacer clic en el botón, se ejecuta guardar
document.getElementById("btn-guardar").addEventListener("click", guardar);