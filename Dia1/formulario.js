// variables del formulario
var texto = document.getElementById("txtLinea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);
dibujarLinea("red", 1, 1, 299, 1);
dibujarLinea("red", 299, 299, 299, 1 );


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var x = parseInt(texto.value);
    console.log(x);

var lineas = parseInt(texto.value); 
var l = 0;
var yi, xf, xi, yf;
var colores = "pink";
var espacio = ancho/lineas;

for(l; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * l;
    xi = espacio * l;
    yf = espacio * l;
    dibujarLinea(colores, 0, yi, xf, ancho);
    dibujarLinea("blue", xi, 0, ancho, yf);
    dibujarLinea("pink", xi, 0, )

}
}