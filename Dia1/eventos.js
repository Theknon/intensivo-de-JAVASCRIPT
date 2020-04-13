var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39  
};
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento){

if(evento.keyCode == teclas.UP){
    console.log("Ariiba");
}else if(evento.keyCode == teclas.DOWN){
    console.log("Abajo")
}else if(evento.keyCode == teclas.LEFT){
    console.log("Izquierda")
}else if(evento.keyCode == teclas.RIGHT){
    console.log("Derecha")
}

switch(evento.keyCode){
    case teclas.UP:
    break;
    case teclas.DOWN:
    break;
    case teclas.LEFT:
    break;
    case teclas.RIGHT:
    break;
    default:

}

}