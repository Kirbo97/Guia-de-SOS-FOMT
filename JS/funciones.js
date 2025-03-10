
function Scrollbutton(tip_bot) {
    var anchoVentana = window.innerWidth;
    var salto_movile=525;
    var salto_comp=540;
        
    if (anchoVentana <= 980) { // desplasamiento para cuando es  el movile
        if (tip_bot === 'arriba') {
            document.getElementById("boxsort").scrollTop -= salto_movile;
        } else if (tip_bot === 'abajo') {
            document.getElementById("boxsort").scrollTop += salto_movile;
        }
            
    } else if (anchoVentana > 980) { // desplasamiento para cuando es la computadora
        if (tip_bot === 'arriba') {
            document.getElementById("boxsort").scrollTop -= salto_comp;
        } else if (tip_bot === 'abajo') {
            document.getElementById("boxsort").scrollTop += salto_comp;
        }   
    }
}   