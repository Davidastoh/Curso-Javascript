class Computadora {
    // Atributos
    constructor(marca) {
        this.marca = marca;
        this.color = "";
        this.tipoCase = "tower";        
    }

    // Métodos
    encender() {
        return "Estoy encendiendo...";
    }

    apagar() { 
        return "Estoy cerrando sesión y guardando informaciones antes del apagado...";
    }

    escribir() {
        return "estoy escribiendo mi informe";
    }

    jugar() {
        return "estoy jugando dota...";
    }
}

// Instanciar
let miPC = new Computadora("gigabyte");
console.log(miPC.encender()); 


//Ejercicio con clases
//diseñar una clase para mi entidad celular 
//Tendra como atributos numero marca, modelo, capacidad de bateria 
//Tendra como metodos encender, apagar, llamar, colgar, enviar mensaje. 

class Celular {
    // Atributos
    constructor(numero, marca, modelo, capacidadBateria) {
        this.numero = numero;
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadBateria = capacidadBateria;
        this.encendido = false; // Estado del celular
    }

    // Métodos
    encender() {
        this.encendido = true;
        return `${this.marca} ${this.modelo} encendido.`;
    }

    apagar() {
        this.encendido = false;
        return `${this.marca} ${this.modelo} apagado.`;
    }

    llamar(numeroDestino) {
        return this.encendido 
            ? `Llamando a ${numeroDestino} desde ${this.numero}...` 
            : "El celular está apagado. Enciéndelo para realizar una llamada.";
    }

    colgar() {
        return this.encendido 
            ? "Llamada finalizada." 
            : "El celular está apagado.";
    }

    enviarMensaje(numeroDestino, mensaje) {
        return this.encendido 
            ? `Enviando mensaje a ${numeroDestino}: ${mensaje}` 
            : "El celular está apagado. Enciéndelo para enviar un mensaje.";
    }
}

// Ejemplo de uso
const celular1 = new Celular("123456789", "Samsung", "Galaxy S21", 4000);
console.log(celular1.encender());
console.log(celular1.llamar("987654321"));
console.log(celular1.enviarMensaje("987654321", "Hola, ¿cómo estás?"));
console.log(celular1.colgar());
console.log(celular1.apagar());