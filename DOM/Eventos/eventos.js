var boton = document.getElementById('boton');
boton.onclick = function(){
    alert("De nuevo funciona!!");
};

var boton2 = document.getElementById('btnSaludo');
boton2.onclick = function(){
    document.write("Buenos dias si funciona");
}

var sumar = document.getElementById('suma');
sumar.onclick = function(){
    numero1 = parseInt(document.getElementById('numero1').value);
    numero2 = parseInt(document.getElementById('numero2').value);
    resultado = document.getElementById('resultado').innerHTML = numero1 + numero2;

}