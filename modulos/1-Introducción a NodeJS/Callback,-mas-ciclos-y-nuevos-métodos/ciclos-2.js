/* //TEORIA
let persona = {
    nombre: "jesus",
    apellido: "alvarez",
    edad: 28
}

for (let key in persona) {
    console.log("En la caracteristica " + key + " se encuentra el valor " + persona[key]);
}

let notas = [7, 2, 3, 6, 4, 7, 9, 7, 4]

for (let numero of notas) {
    console.log(numero);
} */



/* //For in
let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}
for (let caracteristica in bart){
    console.log(bart[caracteristica]);
} */



//For of
let frase = "Nos encanta hacer la vertical";
for (let letra of frase){
    console.log(letra);
}