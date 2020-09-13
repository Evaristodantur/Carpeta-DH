let cantidadDeNotificaciones = 2;
let contactosChat = ["Sofia","Carlos","Jorge","Pedro"];
let cantidadMensajes = 10;
let usuarioLogueado = "Mariano";
let muro = [
    "Posteo de " + contactosChat[0],
    "Posteo de " + contactosChat[2]
]
var notas = [
    [
        "Papa de solange",
        "Politica",
        "Texto largo",
        "imagen.jpg",
        "carlitos"
    ],
    [
        "Subio el dolar",
        "Economia",
        "Texto largo",
        "imagen.jpg",
        "pedro"
    ]
]
for(let i = 0 ; i < notas.length ; i++){//2
    for(let j = 0 ; j < notas[i].length[j] ; j++){
        console.log(notas[i][j]);
    }console.log("========")
}
if (usuarioLogueado != null){
    console.log ("Hola " + usuarioLogueado);
}else{
    console.log ("Logueate por favor!");
}
if (cantidadDeNotificaciones){
    console.log("Tenes " + cantidadDeNotificaciones + " notificaciones nuevas")
}
