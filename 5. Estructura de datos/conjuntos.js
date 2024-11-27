// // //Crear una 
// // let vocales=["a","e","i","o","u"]
// // console.log(vocales)

// // //Acceder al elemento de la lista
// // console.log(vocales[4])

// // //Accediendo a los elementos con for

// // for (let i = 0; i < 5; i++) {
// //     console.log(vocales[i]);
// // }
// // console.log(vocales.length)

// //Trabajo
// //Tengo una lista de 7 frutas
// // Crear un programa que identifique si en mi lista existe naranja de existir me mostrara su indice, de no existir me mostrara un mensaje de error
// // Lista de frutas

// buscarNaranja(frutas);

// let frutas = ["manzana", "banana", "kiwi", "fresa", "mango", "uva", "naranja"];
// let indice = frutas.indexOf("naranja");
// console.log(indice !== -1 ? `"naranja" se encuentra en el índice: ${indice}` : "Error");

// //Crear dos funciones que reciban por parametros una lista de numeros, una funcion encontrara y devolvera el numero menor de la lista y la otra funcionn encontratara y devolvera el numero mayor de la lista. no usar los metodos de min y max
// // Función para encontrar el número menor
// function encontrarNumeroMenor(lista) {
//     let menor = lista[0];
//     for (let i = 1; i < lista.length; i++) {
//         if (lista[i] < menor) {
//             menor = lista[i]; 
//         }
//     }
//     return menor;
// }
// function encontrarNumeroMayor(lista) {
//     let mayor = lista[0]; 
//     for (let i = 1; i < lista.length; i++) {
//         if (lista[i] > mayor) {
//             mayor = lista[i]; 
//         }
//     }
//     return mayor;
// }

// let numeros = [5, 3, 8, 1, 4, 7];
// let numeroMenor = encontrarNumeroMenor(numeros);
// let numeroMayor = encontrarNumeroMayor(numeros);

// console.log(`El número menor es: ${numeroMenor}`); 
// console.log(`El número mayor es: ${numeroMayor}`); 



// //Crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
// // Función para contar la cantidad de vocales "a"
// function contarVocalesA(lista) {
//     let contador = 0;
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === "a") {
//             contador++; 
//         }
//     }
//     return contador; 
// }
// let letras = ["a", "b", "c", "a", "d", "e", "a", "f"];
// let cantidadVocalesA = contarVocalesA(letras);

// console.log(`La cantidad de vocales "a" es: ${cantidadVocalesA}`);


//Tengo la siguiente url
//www.gatitas.com/?=marina+gold
//Crea un programa que me capture solo la query
//"marina gold"


// let url="www.gatitas.com/?q=marina+gold"
// let cortarUrl=url.split("=")
// let obtenerPrimerElemento=cortarUrl[1]
// let dividoTextoEnDos=obtenerPrimerElemento.split("+")
// let juntarTexto=dividoTextoEnDos.join(" ")
// // let listaUrl=url.split("=")[1].split("+").join(" ")
// console.log(juntarTexto)

// let datosMax=["Max","Asto",20,"M"]
// let datosMaxObjeto={
//   nombre:"Max",
//   apellido:"Asto",
//   edad:20,
//   sexo:"Todos los dias",
//   ganado:["El primo","Los chamos","Las enfermeras","Mineros"],
//   direccion:{
//     tipoCalle:"pasaje",
//     nombreCallle:"Querobamba",
//     numeroVivienda:222,
//     numeroCuarto:5
//   }
// }
// console.log("Hola soy Max")
// console.log(datosMaxObjeto.ganado)
// console.log(datosMaxObjeto["sexo"])
// console.log(datosMaxObjeto.ganado[3])

//ejercicio
//Crear una funcion que me genere un objetos de caracteristicas tecnicas de una computadora, el objeto debera tener como minimo los siguientes valores
//marca, modelo, procesador, ram, disco, y tarjeta de video

function crearObjeto(marca, modelo, procesador, ram, disco, tarjetaDeVideo) {
    return {
        marca: marca,
        modelo: modelo,
        procesador: procesador,
        ram: ram,
        disco: disco,
        tarjetaDeVideo: tarjetaDeVideo
    };
}
const computadora = crearObjeto("Dell", "Inspiron 15", "Intel i7", "16GB", "512GB SSD", "NVIDIA GeForce MX250");
console.log(computadora);
//en este caso la clave marca existe en mi objetopor lo tanto su valor sera actualizado por intel
objetoPc["marca"]="intel"
console.log(objetoPc)
//en este caso la clave tarjeta no exixte en mi objeto por lo tantomse creara un nuevo elemento con la clave tarjeta y su valor nvidia me tienes invidia 
objetoPc["tarjeta"]="nvidia me tienes nvidia"
console.log(objetoPc)
// Eliminamos la propiedad 'disco'
delete objetoPc.disco;