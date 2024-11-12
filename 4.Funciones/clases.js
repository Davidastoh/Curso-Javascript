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