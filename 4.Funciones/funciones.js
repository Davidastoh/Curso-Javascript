// //Ejercicio
// //Crear una funcion que me de un saludo de bienvenida

// function mifuncionParametros(nombre) {
//     console.log("Bienvenido " + nombre +  ", Espero que tengas un buen día.");
// }
// mifuncionParametros("Max");

// //Funcion como valor
// let saludo=function(){
//     console.log("Hola")
// }
// saludo()

//Binding de javascript lo que hace es subir las funciones declarativas a la cabecera de mi archivo
// function despedida(){
//  return "Adios"
//    }



console.log(despedida())

let saludo=()=>{"Hola"}
console.log(saludo())

function despedida(){
    return "Adios"
}