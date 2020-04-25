var text = prompt("Que quieres ver?");

function animar(){                   // .classList haccede a la clase y .toggle quita y agrega
    document.getElementById('barra').classList.toggle('progress-bar-animated');

}

function cambiatitle (){
    document.getElementById('tittle').innerHTML = text;
}

var boton = document.getElementById('boton');
boton.onclick = function(){
    animar();
    cambiatitle();
}



