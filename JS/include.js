async function loadHTML(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadHTML("nav", "/Guia-de-SOS-FOMT/Estructura/nav.html");
loadHTML("footer", "/Guia-de-SOS-FOMT/Estructura/footer.html");