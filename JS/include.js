async function loadHTML(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

const base = window.location.pathname.split('/')[1];
loadHTML("nav", "/${base}/Estructura/nav.html");
/*loadHTML("footer", "../Estructura/footer.html");*/