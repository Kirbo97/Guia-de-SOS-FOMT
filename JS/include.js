async function loadHTML(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
} 

async function cargarPagina() {
    await loadHTML("loading", "/Guia-de-SOS-FOMT/Estructura/carga.html");
    await Promise.all([ 
        loadHTML("nav", "/Guia-de-SOS-FOMT/Estructura/nav.html"), 
        loadHTML("footer", "/Guia-de-SOS-FOMT/Estructura/footer.html") 
    ]); 
    const imagenes = document.images;
    await Promise.all( 
        Array.from(imagenes).map(function (imagen) { 
            if (imagen.complete) { return Promise.resolve(); }
            return new Promise(function (resolve) { 
                imagen.addEventListener("load", resolve); 
                imagen.addEventListener("error", resolve); 
            }); 
        }) 
    );
    
    document.getElementById("loading-screen").style.display = "none";
} 
        
cargarPagina();