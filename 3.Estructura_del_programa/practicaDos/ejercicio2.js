// Escribe un programa que use console para imprimir todos los numeros del 1 al 100 con tres excepciones. Para los numeros divisibles por 3 imprime "Fizz" en lugar del numero y para los numeros divisibles por 5 y no por 3 "Buzz" en lugar del numero, si el numero es divisible tres y 5 imprime "FizzBuzz" en lugar del numero

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}