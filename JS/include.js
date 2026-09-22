async function loadHTML(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

// Cargar nav 
loadHTML("nav", "/Guia-de-SOS-FOMT/Estructura/nav.html"); 
// Cargar footer 
loadHTML("footer", "/Guia-de-SOS-FOMT/Estructura/footer.html");

// Cargar pantalla de carga 
async function cargarPantalla() { 
  await loadHTML("carga", "/Guia-de-SOS-FOMT/Estructura/carga.html"); 
  // Ocultar la pantalla de carga cuando el HTML principal ya haya sido procesado. 
  const loading = document.getElementById("loading-screen"); 
  if (loading) { loading.style.display = "none"; } 
} 
cargarPantalla();