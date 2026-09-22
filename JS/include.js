async function loadHTML(id, file) {
    const response = await fetch(file);

    if (!response.ok) { throw new Error(`No se pudo cargar: ${file}`); }

    const data = await response.text();
    const element = document.getElementById(id);

    if (!element) { throw new Error(`No se encontró el elemento: ${id}`); }

    element.innerHTML = data;
}

// Cargar nav 
async function cargarNav() {
    try {
        await loadHTML("nav", "/Guia-de-SOS-FOMT/Estructura/nav.html");
    } catch (error) {
        mostrarError(error);
    }
}
cargarNav();

// Cargar footer 
async function cargarFooter() {
    try {
        await loadHTML("footer", "/Guia-de-SOS-FOMT/Estructura/footer.html");
    } catch (error) {
        mostrarError(error);
    }
}
cargarFooter();


// Cargar pantalla de carga 
async function cargarPantalla() {
    try {
        await loadHTML("carga", "/Guia-de-SOS-FOMT/Estructura/carga.html");
        // Ocultar la pantalla de carga cuando el HTML principal ya haya sido procesado.
        const loading = document.getElementById("loading-screen");

        if (loading) { loading.style.display = "none"; }
    } catch (error) {
        mostrarError(error);
    }
}
cargarPantalla();

// Mostrar error de carga
function mostrarError(error) {
    console.error("Error al cargar la página:", error);

    document.body.innerHTML = `

        <div style="
            position: fixed;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
            font-family: Arial, sans-serif;
            background: white;
        ">

            <h1>La página no pudo cargarse</h1>

            <p>
                Ocurrió un problema al cargar la página.
            </p>

            <button
                onclick="location.reload()"
                style="
                    padding: 12px 25px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                "
            >
                Recargar página
            </button>
        </div>
    `;
}