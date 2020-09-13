/* // if ternario

let fruta = "sandia";
let resultado = fruta == "mango"? "Tenes un mango, que rico": "Que mala suerte, no quedan mangos"
console.log(resultado);

//switch

let semaforo = "sandia";

switch(semaforo){
    case "Verde":
        console.log("Podes pasar");
        break;
    case "Amarillo":
        console.log("Fijate que no venga nadie");
        break
    case "Rojo":
        console.log("No podes pasar.");
        break
    default:
        console.log("No tengo idea tbh, fijate");
        break;
} */



/* //Fin de semana
let dia = 'viernes'
switch (dia){
    case "viernes":
        console.log("buen finde");
        break;
    case "lunes":
        console.log("buena semana");
        break;
    default:
        console.log("buen dia");
        break;
} */



/* //¿Tengo clases?
let dia = 'jueves'

switch (dia) {
    case "lunes" || "miercoles" || "viernes":
        console.log("tienes clases");
        break;
    default:
        console.log("no tienes clases");
        break;
} */



/* //¿Puede pasar cosme fulanito?
function puedePasar(nombre){
    switch(nombre){
        case "Cosme Fulanito":
            return false;
        default:
            return true;
    } 
}
console.log(puedePasar("Cosme Fulanito")); */



/* //Repetir como un loro
function loro (texto){
    for(let i = 0 ; i <= 4 ; i++){
        console.log(texto);
    }
}
console.log(loro("askldj"))
 */



/* //Contando impares
function noParesDeContarImparesHasta(numero){
    let total = [];

    for(let i = 0 ; i <= numero ; i++){
        if(i%2 !== 0){
            total.push(i);
        }
    }
    return total;
}
console.log(noParesDeContarImparesHasta(22));
 */

function noParesDeContarImparesHasta(numero){
    let total = 0;

    for(let i = 0 ; i <= numero ; i++){
        if(i%2 !== 0){
            total += 1;
        }
    }
    return total;
}console.log(noParesDeContarImparesHasta(22))







