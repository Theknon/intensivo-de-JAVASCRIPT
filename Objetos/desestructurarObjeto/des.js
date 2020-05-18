let pablo = {
    nombre: "Enrique",
    edad: "28"
}
let lina = {
    nombre: "Maria",
    edad: 27
}

mostrarDatos = (nombre, edad) =>{
console.log(`Hola me llamo ${nombre} mi edad es de ${edad}`);
};

mostrarDatos(pablo.nombre, pablo.edad);
mostrarDatos(lina.nombre, lina.edad);

cumple = (edad) =>{
    lina.edad += 1;
}

cumple();