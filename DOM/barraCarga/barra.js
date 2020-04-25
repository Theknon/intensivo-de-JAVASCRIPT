var animales = function(){
    var animales = ["perro","gato","loro","vaca","pollo"];
    for(i = 0; i < animales.length; i++){
      console.log(animales[i]);
    }
}
animales();

var animalitos = function(animal1 = "p",animal2 = "g", animal3 ="t", animal4 = "m", animal5 ="l"){
  console.log(animal1, animal2, animal3,animal4,animal5);
}
animalitos("perro","gato","loro","vaca","pollo");

function carros(carro1, carro2, carro3, carro4, ...otros){
    console.log(carro1, carro2, carro3, carro4, otros);
}
carros("Mazda","Audi","Chevrolet","Nisan", "Tesla", "Jaguar");

function contarCarros(){
    for(i = 0; i > carros().length; i++){
        console.log(carros[i]);
    }
}

contarCarros();