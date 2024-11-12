//Crear un funcion que devuelva el numero menor pasado por argumento
function numeroMenor(...args) {
    if (args.length === 0) {
        return null; 
    }
    return Math.min(...args);
}

// Ejemplo de uso
const resultado = numeroMenor(5, 3, 8, 1, 4);
console.log("El número menor es:", resultado);