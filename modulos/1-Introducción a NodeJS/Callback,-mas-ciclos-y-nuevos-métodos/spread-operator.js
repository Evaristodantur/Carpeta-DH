//TEORIA
let peliculasAccion = ["Rambo", "Avengers", "Spiderman"];
let peliculasComedia = ["Mi Pobre Angelito", "The hangover"];
let todasLasPelis = [...peliculasAccion, ...peliculasComedia]
console.log(todasLasPelis);


let generoComedia = {
    nombreGenero: "Comedia",
    popularidad: 3
}
let miPobreAngelito = {
    titulo: "Mi Pobre Angelito",
    ranking: 3,
    duracion: 135,
    ...generoComedia
}
let theHangover = {
    titulo: "The Hangover",
    ranking: 2,
    duracion: 110,
    ...generoComedia
}
console.log(miPobreAngelito,theHangover);


function limpiarEspacios(...palabras){
    for (let i = 0 ; i < palabras.length ; i++){
        palabras[i] = palabras[i].trim();
    }
    return palabras
}
let r1 = limpiarEspacios("hola        ", "      que", "tal          ");
let r2 = limpiarEspacios("hola           ","        mundo");
console.log(r1,r2);