async function loadHTML(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadHTML("nav", "/SOS%20FOMT/Estructura/nav.html");
/*loadHTML("footer", "../Estructura/footer.html");*/