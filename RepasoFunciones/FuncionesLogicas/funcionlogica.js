var dias = prompt("Ingrese dias");
var horas = prompt("Ingrese horas");

function def_act(dias, horas){
    if(dias == 0){
        if(horas >= 0){
            return "Totalmente inactivo";
        }
    }
    if(dias == 1 ){
        if(horas >=0 && horas <=3){
            return "Usuario inactivo";
        }else if(horas >3 && horas <= 5){
            return "Usuaro poco activo"
        }else if(horas > 5 && horas <= 7){
            return "Usuario casual"
        }else if(horas > 7){
            return "Casual activo"
        }
    }
    else if(dias > 1 && dias <= 3){
        if(horas >=0 && horas <=3){
            return "Usuario  mejor que el casual";
        }else if(horas >3 && horas <= 5){
            return "Usuaro  normal"
        }else if(horas > 5 && horas <= 7){
            return "Usuario  mejor que el normal"
        }else if(horas > 7){
            return "Mejor que el casual activo"
        }
    }else if(dias > 4){
        if(horas >=0 && horas <=3){
            return "Usuario normal activo";
        }else if(horas >3 && horas <= 5){
            return "Usuaro  activo"
        }else if(horas > 5 && horas <= 7){
            return "Usuario constante"
        }else if(horas > 7){
            return "Usuario PRO"
        }
    }
}

var usuario = def_act(dias,horas);

console.log(usuario);
document.write(usuario);