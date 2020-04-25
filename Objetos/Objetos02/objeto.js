let nombres = {
    nombre1: "pablo",
    nombre2: "Carolina",
    nombre3: "Tania",
    nombre4: "Lina",
    nombre5: "Alejandra"
}

let lina = {
    nombre: "Lina",
    apellido: "Nieto"
}
let pablo = {
    nombre: "Pablo",
    apellido: "Pineda"
}


///////////////////////////////

mostrarNombre = (n) =>{
   console.log(n)
}
mostrarNombre(nombres.nombre1);


callName = ({apellido}) =>{
    console.log(apellido);
}
callName(lina);
callName(pablo);    
callName({apellido: "Juanito"})