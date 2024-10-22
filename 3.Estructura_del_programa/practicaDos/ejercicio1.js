// Escribe un bucle que realice 7 llamadas console para mostar el siguiente triangulo
for (let i = 1; i <= 7; i++) {
    let fila = '';
    for (let j = 1; j <= i; j++) {
        fila += '#';
    }
    console.log(fila);
}