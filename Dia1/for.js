var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30; 
var l = 0;
var yi, xf, xi, yf;
var colores = "pink";

for(l; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * l;
    xi = 10 * l;
    yf = 10 * l;
    dibujarLinea(colores, 0, yi, xf, 300);
    dibujarLinea("blue", xi, 0, 300, yf);
    dibujarLinea("pink", xi, 0, )

}

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
