/* //TEORIA
let notas = [3, 5, 8, 10, 9, 8, 8, 8, 2, 3, 7];
let notasHasta100 = notas.map(function(numero){
    return numero * 10;
});
//console.log(notasHasta100);


let notasAprobadas = notas.filter(function(numero){
    return numero >= 6;
})
//console.log(notasAprobadas);


let resultadoFinal = notas.reduce(function(estado,numero){
    return estado + numero;
})
//console.log(resultadoFinal);


let foreach = notas.forEach(function(valor,indice){
    console.log("El numero " + valor + " esta en el la posicion de array numero " + indice);
}) */



/* //Filter con números
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let mayores = numeros.filter(function(numero){
    return numero > 18;
})
console.log(mayores); */