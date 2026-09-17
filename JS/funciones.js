/* ************************************************************** */
/*  Funciones para desplasar el contenido de la caja por botones  */
/* ************************************************************** */

function Scroll_button_evento_villager(tip_bot){ desplasar(tip_bot,345.5,350); }

function Scroll_button_villager(tip_bot){ desplasar(tip_bot,525,520); }

function Scroll_button_marriage(tip_bot){ desplasar(tip_bot,638,520); }

function desplasar(tip_bot,salto_movile,salto_comp) {
    var anchoVentana = window.innerWidth;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot === 'arriba') {
            document.getElementById("villager_box").scrollTop -= salto_movile;
        } else if (tip_bot === 'abajo') {
            document.getElementById("villager_box").scrollTop += salto_movile;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot === 'arriba') {
            document.getElementById("villager_box").scrollTop -= (salto_comp);
        } else if (tip_bot === 'abajo') {
            document.getElementById("villager_box").scrollTop += salto_comp;
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

function cambiar_estacion(num,i){
    let encabezado = document.getElementById("estacion");
    let titulo = document.getElementById("tituloEstacion");

    for(i;i<=4;i++){ document.getElementById("calendario"+i).style.display="none"; }
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
    for(i;i<=3;i++){ document.getElementById("lista"+i).style.display="none"; }
    document.getElementById("lista"+num).style.display="block";
}

function cambiar_pagina(num,i){
    for(i;i<=5;i++){ document.getElementById("lista_receta"+i).style.display="none"; }
    document.getElementById("lista_receta"+num).style.display="block";
}