//Haciendo uso de la recursion crear una funcion que me muestre los primeros 20 numeros de la serie fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

function mostrarFibonacci(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(fibonacci(i)); 
    }
}

// Llamada para mostrar los primeros 20 números de Fibonacci
mostrarFibonacci(20);