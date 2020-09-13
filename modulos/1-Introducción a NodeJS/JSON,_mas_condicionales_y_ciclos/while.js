/* let clase = 6;

do{
    console.log("Bienvenidos a la clase numero " + clase + "!");
    clase++;
}while(clase <= 5){
    console.log("Ya superaste la clase numero 5. Felicidades!");
} */



/* //Contemos un while
function count(desde, hasta) {
    while (desde < hasta){
       console.log("El número actual es " + desde + " "  + "y es menor a " + hasta);
    }
} */



/* //Encontrando el 5
let numeros = [1,2,78,25,3,5,7,9,22];
let numero = 0;
function encontreUn5(numeros){
    do{
        console.log(numeros[numero]);
        numero++;
    }while(numeros[numero] == 5){
        console.log("Se encontró un 5!");
    }
} */



/* //Creando la tabla de multiplicar
function tablaDeMultiplicar(numero) {
    let i = 1;
    while(i <= 10){
        console.log(numero + " * " + i + " = " + numero * i);
        i++;
    }
}
console.log(tablaDeMultiplicar(4)); */