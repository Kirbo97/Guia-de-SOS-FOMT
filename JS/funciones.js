/* ************************************************************** */
/*  Funciones para desplasar el contenido de la caja por botones  */
/* ************************************************************** */

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

function cambiarTemporada(num){ cambiar(num,0); }

function cambiarTemporada_mascota(num){ cambiar(num,1); }

function cambiar(num,i){
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