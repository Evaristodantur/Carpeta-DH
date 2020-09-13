/* let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacion) => operacion(num1, num2);

console.log(calculadora(5,2,multiplicar)); */



/* //Pasando un callback
let doble = num => num * 2;
let triple = num => num * 3;
let apply = (num, multiplicacion) => multiplicacion(num);

console.log(doble(9));
console.log(apply(4,triple)); */



/* //Hagamos una calculadora
let suma = (n1,n2) => n1 + n2;
let resta = (n1,n2) => n1 - n2;
let multiplicacion = (n1,n2) => n1 * n2;
let division = (n1,n2) => n1 / n2;
let calculadora = (n1,n2,operacion) => operacion(n1,n2); */



/* //Pasando un callback reloaded
function agregarHttp(url){
    let concatenado;
    concatenado = "http://" + url;
    return concatenado;
}
function procesar(url,funcion){
    let final = [];
    for (let i = 0; i < url.length; i++) {
        final.push(funcion(url[i]))
    }
    return final;
}
console.log(procesar(["hola","chau"],agregarHttp)); */
