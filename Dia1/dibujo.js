var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30; 
var l = 0;
var yi, xf;
var colores = "blue";

while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colores, 0, yi, xf, 300);
    l++;
}

dibujarLinea("red", 1, 1, 1, 300);
dibujarLinea("red", 1, 299, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

