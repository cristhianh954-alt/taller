// Función: lee el nombre y la ciudad y los muestra
function mostrarNombre() {
 const nombre = localStorage.getItem("nombre"); // lee de la bodega
 const ciudad = localStorage.getItem("ciudad"); // lee la ciudad
 if (nombre === null) {
 document.getElementById("saludo").textContent = "No hay ningún nombre guardado.";
 } else {
 document.getElementById("saludo").textContent = "Hola, " + nombre + ", de " + ciudad;
 }
}
// Función: borra el nombre y vuelve a mostrar el resultado
function borrar() {
 localStorage.removeItem("nombre"); // borra de la bodega
 localStorage.removeItem("ciudad");
 mostrarNombre(); // actualiza el mensaje
}
// Función regresar a la pagina principal
function Principal() {
    window.location.href="index.html"
}
// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre); // al cargar la página
document.getElementById("btn-borrar").addEventListener("click", borrar); // al hacer clic
document.getElementById("btn-pagprincipal").addEventListener("click", Principal);
