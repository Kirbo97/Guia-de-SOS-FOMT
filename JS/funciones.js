/* ************************************************************** */
/*  Funciones para desplasar el contenido de la caja por botones  */
/* ************************************************************** */

function Scroll_button_evento_villager(tip_bot,tip_cuad){ desplasar(tip_bot,tip_cuad,345.5,350); }

function Scroll_button_villager(tip_bot,tip_cuad){ desplasar(tip_bot,tip_cuad,525,521); }

function Scroll_button_marriage(tip_bot,tip_cuad){ desplasar(tip_bot,tip_cuad,638,520); }

function desplasar(tip_bot,tip_cuad,salto_movile,salto_comp) {
    var anchoVentana = window.innerWidth;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot === 'arriba') {
            document.getElementById(tip_cuad).scrollTop -= salto_movile;
        } else if (tip_bot === 'abajo') {
            document.getElementById(tip_cuad).scrollTop += salto_movile;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot === 'arriba') {
            document.getElementById(tip_cuad).scrollTop -= (salto_comp);
        } else if (tip_bot === 'abajo') {
            document.getElementById(tip_cuad).scrollTop += salto_comp;
        }   
    }
}   

/* ****************************************************** */
/*  Funciones para editar la tabla acorde de la estacion  */
/* ****************************************************** */

function cambiarTemporada(num){ cambiar_estacion(num,0); }

function cambiarTemporada_mascota(num){ cambiar_estacion(num,1); }

function cambiarTemporada_recursos(num){ cambiar_estacion(num,1); }

function cambiar_lista(num){ cambiar_peces(num,1); }

function cambiar_receta(num){ cambiar_pagina(num,1); }

function cambiar_mineral(num){ cambiar_pagina_mineral(num,1); }

function cambiar_estacion(num,i){
    let encabezado = document.getElementById("estacion");
    let titulo = document.getElementById("tituloEstacion");
    let lista_estacion = document.getElementById("calendario" + num);

    // Si ya está visible, ocultarla
    if (lista_estacion.style.display === "block") {
        lista_estacion.style.display = "none";
        encabezado.style.backgroundColor = "#757a74";
        document.getElementById("calendario"+"0").style.display="block";
        return;
    }

    // Ocultar todas las listas
    for(i;i<=4;i++){ document.getElementById("calendario"+i).style.display="none"; }
    
    // Mostrar la seleccionada
    document.getElementById("calendario"+num).style.display="block";

    if(num==1){ // primavera 
        encabezado.style.backgroundColor="#84f16e"; 
        titulo.textContent="Calendario de Primavera";
    } 

    if(num==2){ // verano
        encabezado.style.backgroundColor="#f2e88c";
        titulo.textContent="Calendario de Verano"; 
    }

    if(num==3){  // otoño
        encabezado.style.backgroundColor="#f7b05f"; 
        titulo.textContent="Calendario de Otoño"; 
    }

    if(num==4){  // invierno
        encabezado.style.backgroundColor="#7ed1f5"; 
        titulo.textContent="Calendario de Invierno"; 
    }
}

function cambiar_peces(num,i){
    let lista_peces = document.getElementById("lista" + num);

    // Si ya está visible, ocultarla
    if (lista_peces.style.display === "block") {
        lista_peces.style.display = "none";
        return;
    }

    // Ocultar todas las listas
    for(i;i<=3;i++){ document.getElementById("lista"+i).style.display="none"; }

    // Mostrar la seleccionada
    lista_peces.style.display = "block";
}

function cambiar_pagina(num,i){
    let lista_recetas = document.getElementById("lista_receta" + num);

    // Si ya está visible, ocultarla
    if (lista_recetas.style.display === "block") {
        lista_recetas.style.display = "none";
        return;
    }
    // Ocultar todas las listas
    for(i;i<=5;i++){ document.getElementById("lista_receta"+i).style.display="none"; }

    // Mostrar la seleccionada
    lista_recetas.style.display = "block";
}

function cambiar_pagina_mineral(num,i){
    let lista_Mineral = document.getElementById("lista_" + num);

    // Si ya está visible, ocultarla
    if (lista_Mineral.style.display === "block") {
        lista_Mineral.style.display = "none";
        return;
    }

    // Ocultar todas las listas
    for(i;i<=4;i++){ document.getElementById("lista_"+i).style.display="none"; }

    // Mostrar la seleccionada
    lista_Mineral.style.display = "block";
}
