//Expresion y declaraciones 

let cadena; 
cadena="Hola";

let otraCadena="Hola"

//error de logica
const edadPersona=34
edadPersona="35"

//Antes de let en acma script 6
var otraCadenamas="Hola"

//funciones de conversion number
console.time("Number") //3771
// let elNumero=number(prompt("Elige un numero"))
// console.log(`Tu numero es la raiz cuadrada de: ${elNumero+elNumero}`)

let elNumero=prompt("Elige un numero")
console.log(`Tu numero es la raiz cuadrada de: ${(+elNumero)*(+elNumero)}`)
console.timeEnd("Number") //
