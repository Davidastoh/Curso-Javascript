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

//En el caso de las funciones como valor o funciones flecha
//El bunding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por estos casos debemos ejecutar las funciones despues de haberlo creado 
let saludo=()=>{"Hola"}
console.log(saludo())
//En el caso de la funcion declarativa el binding eleva toda la funcion al principio del archivo por eso debemos ejecutar la funcion desde cualquier parte del archivo incluso antes que sea creada.
function despedida(){
    return "Adios"
}

//Ejerciccio
// Crear una funcion que tenga o almacene una varibale contador y podamos con funciones relizar la suma mas uno de esta variable y la resta de mas uno de la misma variable ademas de poder tener una funcion que permita acceder al valor actual y poder mostrarlo

//let contador=0
//funcion incremento
//return contador ++
//function decremento 
//return contador --
//function valorContador 
//return contador 

// function crearContador() {
//     let contador = 0; 

//     function incrementar() {
//         contador++; 
//         return contador; 
//     }

//     function decrementar() {
//         contador--; 
//         return contador; 
//     }

//     function valorContador() {
//         return contador; 
//     }

//     return {
//         incrementar,
//         decrementar,
//         valorContador
//     };
// }
// const contador = crearContador();
// console.log("Valor actual:", contador.valorContador()); 
// contador.incrementar();
// console.log("Valor actual:", contador.valorContador());
// contador.decrementar();
// console.log("Valor actual:", contador.valorContador()); 
// contador.incrementar();
// contador.incrementar();
// console.log("Valor actual:", contador.valorContador()); 

function contador(){
    let contador=0
    function incre(){
        return contador++
    }
    function decre(){
        return contador--
    }
    function valueCount(){
        console.log(contador)
    }
    return{
        //Si tu valor es igua puesde poner solo uno 
        valueCount:valueCount,
        incre:incre,
        decre:decre
    }
}

let count1=contador()
for(let i=0;i<5;i++){
    count1.incre()
}

count1.valueCount()

let count2=contador()
for(let i=0;i<5;i++){
    count2.decre()
}

count2.valueCount()
