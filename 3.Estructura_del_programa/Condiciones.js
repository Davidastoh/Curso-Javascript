
//Ejemplos de condicion simple
//Capturamos la edad y convertimos a numero
// let edad=Number(prompt("Ingresa tu edad"))
// console.log(typeof numero)
// if (Number.isNaN(edad)){}
//Verificamos si el tipo de dato edad es number realmente
// if (typeof edad == "number"){
     //Si la comparacion es verdad mostraremos por consola la raiz cuadrada de edad
//     console.log(edad*edad)
// }

//Ejemplo de una condicion simple de una sola linea
// if (1+1==2) console.log("Es verdad")
// let edad = Number(prompt("Ingresa tu edad")); (typeof edad == "number") && console.log(edad * edad);

//Ejercicos de condiciones 
//Crear un programa que me pida un numero y que me muestre por consola si es un numero par o impar 

// let numero = prompt("Introduce un número:");
// if (+numero % 2 == 0) {
//     console.log("Es par");
// } else {
//     console.log("Es impar");
// }

// Ejercicio de la condicion if else

// let total_compra=30
//   if (total_compra > 50 &&  total_compra < 100){
//     console.log(`Tiene un descuento del 10% ${total_compra*0.10}`)
//   }else if (total_compra > 100 && total_compra < 500){
//     console.log(`Tiene un descuento del 20%" ${total_compra*0.20}`)
//   } else{
//     console.log(`Tienes un descuento del 50% ${total_compra*0.50}`)
//   }

//   let total_compra=prompt("Introduce el monto total de la compra: ");
//   if (total_compra > 50 &&  total_compra < 100){
//     console.log(`Tiene un descuento del 10% ${total_compra*0.10}`);
//   }else if (total_compra > 100 && total_compra < 500){
//     console.log(`Tiene un descuento del 20%" ${total_compra*0.20}`);
//   } else{
//     console.log(`Tienes un descuento del 50% ${total_compra*0.50}`);
//   }

  //Ejercicio
  //Crear un programa que pida al ususrario su edad y dependiendo su edad le daremos una serie de regalos
  //REGALOS
  /**
   * - si su edad esta entre 4 a 8 años: te ganaras un chupetin
   * - si su edad esta entre 9 a 13 años: te ganaras una pelota firmada por cuto
   * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia 6101
   * - si su edad es mayor o igual a 18 años: te ganaras al primo.
   */

// let edad = Number(prompt("Introduce tu edad:"));

// if (edad >= 4 && edad <= 8) {
//     console.log("Te ganaste un chupetín");
// } else if (edad >= 9 && edad <= 13) {
//     console.log("Te ganaste una pelota firmada por Cuto");
// } else if (edad >= 14 && edad <= 17) {
//     console.log("Te ganaste un celular Nokia 6101");
// } else if (edad >= 18  <=100) {
//     console.log("Te ganaste al primo");
// } else {
//     console.log("No tienes la edad necesaria");
// }


// let edad=Number(prompt("Ingrese su edad"))
// switch(edad){
//   case 4:
//     console.log("Tienes 4 años")
//     break 
//   case 8:
//     console.log("Tienes 8 años")
//   default:
//     console.log("Tienes:",edad)
//     break
// }



// let edad= Number(prompt("Introduce tu edad:"));
// switch (edad) {
//     case (edad >= 4 && edad <= 8):
//         console.log("Te ganaste un chupetín");
//         break;
//     case (edad >= 9 && edad <= 13) :
//         console.log("Te ganaste una pelota firmada por Cuto");
//         break;
//     case (edad >= 14 && edad <= 17):
//         console.log("Te ganaste un celular Nokia 6101");
//         break;
//     case (edad >= 18  <=100):
//         console.log("Te ganaste al primo");
//         break;
//     default:
//         console.log("No tienes la edad necesaria");
//         break;
// }


//Ejercio
//Realizar un programa que pida 5 Frutas atravez del navegador y relizara las siguientes evaluaciones:
//Naranja,Limon --> "Es una fruta Citrica"
//Platano,manzana --> "Es una fruta dulce"
//Fresa,pera,papaya --> "Es una fruta para ensalada"
//Y si ingresa otra fruta --> "No tiene clasificacion"


for (let i = 1; i <= 5; i++) {
    let fruta = prompt(`Introduce la fruta: ${i}`);
    switch (fruta) {
        case 'naranja':
        case 'limón':
            console.log(fruta,"es una fruta cítrica");
            break;
        case 'platano':
        case 'manzana':
            console.log(fruta, "es una fruta dulce");
            break;
        case 'fresa':
        case 'pera':
        case 'papaya':
            console.log(fruta,"es una fruta para ensalada");
            break;
        default:
            console.log(fruta,"no tiene clasificación");
            break;
    }
}