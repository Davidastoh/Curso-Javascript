console.log(1)
console.log(2)
console.log(3)  
console.log(4)
console.log(5)
console.log(6)  
console.log(7)
console.log(8)
console.log(9)  
console.log(10)
console.log(11)
console.log(12)  
// let contador = 1;
// while (contador <= 1000) {
//     console.log(contador);
//     contador++;
// }


// let contador = 1;
// while (contador <= 12) {
//     console.log(contador);
//     contador=contador+1;
// }


//Ejercicios 
//Crea un programa que me muestre los numeros pares que existe entre 1 y 20

// let contador = 1;
// while (contador <= 20) {
//     if (contador % 2 == 0) {
//         console.log(contador);
//     }
//     contador=contador+1;
// }

// let numeroPar=2
// while (numeroPar<=20){
//     console.log(numeroPar)
//     numeroPar+=1
// }


// for (let contador = 2; contador <= 20; contador++) {
//     if (contador % 2 == 0) {console.log(contador);}}

// crear un progrma que pida un numero y que muestre por consola y que muestre todos los numeros menor al numero ingresado

// let numeroUser=Number(prompt("Ingresa un numero:"))

//mi contador
// contador=1
// while (contador<=numeroUser){
//     console.log(contador)
//     contador+=1
// }


// let numero =prompt("Ingresa un número:");
// console.log(`Números menores que ${numero}:`);
// for (let i = 0; i < numero; i++) {
//     console.log(i);
// }

// Crear un programa que me muestre los numeros menores a 20 
// En caso encuentre un 7 debera terminar el programa y no mostrar el resto de numeros

for (let i = 0; i < 20; i++) {
    if (i == 7) {
        console.log("Se encontró el número 7.");
        break; 
    }
    console.log(i);
}