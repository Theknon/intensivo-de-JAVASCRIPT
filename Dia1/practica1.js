var peso = parseInt(prompt("Cual es tu peso"));
var planeta = prompt("Cual planeta quieres? jupiter o marte");
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var pesoFinal;
pesoFinal = parseInt(pesoFinal);

if(planeta == "marte"){
    pesoFinal = peso  * g_marte / g_tierra;
    document.write("Tu peso en marte es de: " + pesoFinal)
}else if(planeta == "jupiter"){
    pesoFinal = peso  * g_jupiter / g_tierra;
    document.write("Tu peso en jupiter es de: " + pesoFinal)
}else{
    document.write("Tu peso es de 878787827812828278 ");
}
