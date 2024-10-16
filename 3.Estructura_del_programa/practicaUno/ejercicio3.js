// *3. Pedir al usuario un numero y determina si es un numero primo.*

const num = Number(prompt("Ingresa un número: "));
console.log(num > 1 && (num === 2 || num % 2 !== 0) ? "Es primo" : "No es primo");