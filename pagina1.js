function guardar() {
  const nombre = document.getElementById("nombre").value;
  const ciudad = document.getElementById("ciudad").value;

  if (nombre === "" || ciudad === "") {
    document.getElementById("mensaje").textContent = "Por favor escribe tu nombre.";
    return; // no guarda nada y no cambia de página
  }

  sessionStorage.setItem("nombre", nombre);
  sessionStorage.setItem("ciudad", ciudad);
  window.location.href = "pagina2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);
