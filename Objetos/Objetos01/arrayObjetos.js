// Array con objetos
let cursos = [
    
   primero = {
        nombre: "Unity1",
        duracion: 15,
        estado: true
    },
    segundo ={
        nombre: "Unity2",
        duracion: 20,
        estado: true
    },
    tercero = {
        nombre: "Unity3",
        duracion: 10,
        estado: true
    },
    cuarto ={
        nombre: "Unity4",
        duracion: 22,
        estado: true
    },
    quinto = {
        nombre: "Unity5",
        duracion: 30,
        estado: true
    },
    sexto ={
        nombre: "Unity6",
        duracion: 28,
        estado: true
    },
    septimo = {
        nombre: "Unity7",
        duracion: 19,
        estado: true
    },
    octavo ={
        nombre: "Unity8",
        duracion: 25,
        estado: true
    }
]

for( let i of cursos){
    console.log(i.duracion, i.nombre);
}

for(let i of cursos){
    console.log(i.nombre);
}