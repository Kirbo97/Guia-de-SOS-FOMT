
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
    var salto_movile2=630;
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