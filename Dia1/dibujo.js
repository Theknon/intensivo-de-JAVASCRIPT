var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("red", 100, 50, 50, 200);
dibujarLinea("Brue", 0, 0, 20, 300)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

