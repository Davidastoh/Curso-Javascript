// //Crear una 
// let vocales=["a","e","i","o","u"]
// console.log(vocales)

// //Acceder al elemento de la lista
// console.log(vocales[4])

// //Accediendo a los elementos con for

// for (let i = 0; i < 5; i++) {
//     console.log(vocales[i]);
// }
// console.log(vocales.length)

//Trabajo
//Tengo una lista de 7 frutas
// Crear un programa que identifique si en mi lista existe naranja de existir me mostrara su indice, de no existir me mostrara un mensaje de erros
// Lista de frutas

buscarNaranja(frutas);

let frutas = ["manzana", "banana", "kiwi", "fresa", "mango", "uva", "naranja"];
let indice = frutas.indexOf("naranja");
console.log(indice !== -1 ? `"naranja" se encuentra en el índice: ${indice}` : "Error");

//Crear dos funciones que reciban por parametros una lista de numeros, una funcion encontrara y devolvera el numero menor de la lista y la otra funcionn encontratara y devolvera el numero mayor de la lista. no usar los metodos de min y max
// Función para encontrar el número menor
function encontrarNumeroMenor(lista) {
    let menor = lista[0]; // Suponemos que el primer número es el menor
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]; // Actualizamos menor si encontramos un número más pequeño
        }
    }
    return menor;
}

// Función para encontrar el número mayor
function encontrarNumeroMayor(lista) {
    let mayor = lista[0]; // Suponemos que el primer número es el mayor
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i]; // Actualizamos mayor si encontramos un número más grande
        }
    }
    return mayor;
}

// Ejemplo de uso
let numeros = [5, 3, 8, 1, 4, 7];

let numeroMenor = encontrarNumeroMenor(numeros);
let numeroMayor = encontrarNumeroMayor(numeros);

console.log(`El número menor es: ${numeroMenor}`); // Salida: El número menor es: 1
console.log(`El número mayor es: ${numeroMayor}`); // Salida: El número mayor es: 8



//Crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
// Función para contar la cantidad de vocales "a"
function contarVocalesA(lista) {
    let contador = 0; // Inicializamos el contador en 0
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === "a") {
            contador++; // Incrementamos el contador si encontramos una "a"
        }
    }
    return contador; // Devolvemos el total de vocales "a"
}

// Ejemplo de uso
let letras = ["a", "b", "c", "a", "d", "e", "a", "f"];
let cantidadVocalesA = contarVocalesA(letras);

console.log(`La cantidad de vocales "a" es: ${cantidadVocalesA}`); // Salida: La cantidad de vocales "a" es: 3