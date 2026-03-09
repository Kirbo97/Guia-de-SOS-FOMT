
function Scroll_button_villager(tip_bot_1) {
    var anchoVentana = window.innerWidth;
    var salto_movile1=525;
    var salto_comp1=520;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot_1 === 'arriba') {
            document.getElementById("villager_box").scrollTop -= salto_movile1;
        } else if (tip_bot_1 === 'abajo') {
            document.getElementById("villager_box").scrollTop += salto_movile1;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot_1 === 'arriba') {
            document.getElementById("villager_box").scrollTop -= (salto_comp1);
        } else if (tip_bot_1 === 'abajo') {
            document.getElementById("villager_box").scrollTop += salto_comp1;
        }   
    }
}   

function Scroll_button_marriage(tip_bot_2) {
    var anchoVentana = window.innerWidth;
    var salto_movile2=638;
    var salto_comp2=520;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot_2 === 'arriba') {
            document.getElementById("marriage_box").scrollTop -= salto_movile2;
        } else if (tip_bot_2 === 'abajo') {
            document.getElementById("marriage_box").scrollTop += salto_movile2;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot_2 === 'arriba') {
            document.getElementById("marriage_box").scrollTop -= (salto_comp2);
        } else if (tip_bot_2 === 'abajo') {
            document.getElementById("marriage_box").scrollTop += salto_comp2;
        }   
    }
}   

function cambiarTemporada(num){
    let total = 4;
    let encabezado = document.getElementById("estacion");
    let titulo = document.getElementById("tituloEstacion");

    for(let i=0;i<=total;i++){ document.getElementById("calendario"+i).style.display="none"; }
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