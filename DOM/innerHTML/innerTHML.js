function cambiar(){
document.getElementById('titulo').innerHTML = "Cambiado si funciona!!";
}

var boton = document.getElementById('boton');
boton.onclick = function(){
    cambiar();
}