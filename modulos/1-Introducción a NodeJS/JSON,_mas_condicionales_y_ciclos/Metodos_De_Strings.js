/* //Completar URL
function dominio (pagina){
    return "http://www." + pagina;
}
console.log(dominio("digitalhouse.com.ar"));
 */



/* //Contar los caracteres
let texto = "Hola, mi nombre es Evaristo";
console.log(texto.length) */



/* //Reemplazo fast fast
let primera = "Hola";
let segunda = "Chau";
let texto = "Hola, me llamo Evaristo";
function reemplazoFastFast (texto,primera,segunda){
    return texto.replace(primera,segunda);
} */



/* //¿Están hablando de mi?
let texto = "Me llamo jose";
let palabra = "llamo";
function menciona (texto,palabra){
    let resultado = texto.indexOf(palabra);
    if(resultado == -1){
        return false;
    }else{
        return true;
    }
}
console.log(menciona(texto,palabra)); */



//Solo el nombre
let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11);
console.log(licenciada);