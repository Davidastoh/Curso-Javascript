// *1. Pedir al usuario dos numeros al realizar el producto de ambos, determinar en una condicion de una sola linea si el resultado es mayor a 100.*

const [num1, num2] = [Number(prompt("Ingresa el 1er número: ")), Number(prompt("Ingresa el 2do número: "))];
console.log(num1 * num2 > 100 ? "Mayor a 100" : "No mayor a 100")

