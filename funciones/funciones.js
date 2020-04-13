// funciones declarativas

function miFuncion(){
    return 3;
}

miFuncion();

// funciones de expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}
saludarEstudiante("Pineda");




function saludar(nombre, edad){
console.log(`hola ${nombre} tienes ${edad}`)
}

saludar("Enrique", 25);


function suma(a,b){
    return a + b;
}

var resultado = suma(20,22);


function asistencia(nombre, apellido, edad, grado){
    console.log(`Buen dia ${nombre} ${apellido} estas en programacion, tienes ${edad} en el grado ${grado}`)
}

asistencia("Pepito", "Perez", 28, "Primero" );

// Inicializacion de parametros

function contar(cantidad = 10){
    console.log(`Total ${cantidad}`);
    document.write(`Hola buen dia el total es de ${cantidad}`);
}
contar(80);


// Parametros REST 
// Permite ingresar datos adicionales que no estan dentro de los ya parametrizados en la funcion

function receta(ingrediente1, ingrediente2, ...adicionales){
    console.log(`El ingrediente 1 es ${ingrediente1}`);
    console.log(`El ingresiente 2 es ${ingrediente2}`);
    console.log(`Ingredientes adicionales`, adicionales);
}

receta("Pollo", "Tomate", "Papa", "cebolla");

function autos(...marcas){
    console.log("Las marcas son ", marcas);
}

autos("Audi", "Mercedes", "Toyota", "Nisan");

// Prametros SPREAD

function cocinar(Ingrediente1, Ingrediente2, Ingrediente3, ...Adicional){
    console.log("Ingrediente1: ", Ingrediente1);
    console.log("Ingrediente2: ", Ingrediente2);
    console.log("Ingrediente3: ", Ingrediente3);
    console.log("Ingredientes adicionales: ", Adicional);
}

var ingresientesBase = ["Carne", "Cebolla"];

cocinar(ingresientesBase, "Pescado", "Tomate", "Jalapeño");


// funciones anonimas

var perrito = function(){
    var nomre = "Maxi";
    return nomre;
}

perrito();