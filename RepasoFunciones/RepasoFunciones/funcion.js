function saludo (){
    document.write("Hola que hace <br/>");
};

saludo();

function suma(a, b){
    return a + b;
};

document.write(`La suma es ${suma(20, 119)} <br/>`);

function alumno(nombre, apellido){
    return nombre + apellido;
}

document.write(`Hola buen dia ${alumno("Pablo ", "Pineda <br/>")}`);

function recetas(ingrediente1, ingrediente2, ingrediente3, ... otros){
document.write(`Los ingredienes son: ${ingrediente1}, ${ingrediente2}, ${ingrediente3}, ${otros}`);
};

recetas("Tomate ", "Leche ", "Arroz ", "Huevos ", "Canela ", "Pan ");

function mult(a,b){
    resultado = a * b;
    if(a == 0 || b == 0){
        console.log("No multiplicacion por cero retorna cero")
    }
    else{
        return resultado;
    }
};

console.log(mult(0,180));