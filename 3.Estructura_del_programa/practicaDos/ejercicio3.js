//Escribe un programa que cree una cadena que represente un tablero de 8x8 usando caracteres de salto de linea para separar las lineas, en cada posicion del tablero hay un caracter de espacio o un caracter "#". Los caracteres deben formar un tablero de ajedrez

function crearTableroAjedrez() {
    let tablero = "";
    let fila = 0;

    while (fila < 8) {
        for (let columna = 0; columna < 8; columna++) {
            if ((fila + columna) % 2 == 0) {
                tablero += " "; 
            } else {
                tablero += "#";  
            }
        }
        tablero += "\n"; 
        fila++; 
    }
    return tablero;
}
const tableroAjedrez = crearTableroAjedrez();
console.log(tableroAjedrez);

