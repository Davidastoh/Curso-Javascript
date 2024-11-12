# Prototype 
En JavaScript, el concepto de "prototipo" es fundamental para entender cómo funciona la herencia y la creación de objetos. El sistema de prototipos permite que los objetos hereden propiedades y métodos de otros objetos. Aquí te explico cómo funciona y te doy ejemplos.

## Prototipos en JavaScript

Prototipo de un Objeto:
Cada objeto en JavaScript tiene una propiedad interna llamada  [[Prototype]] , que se refiere a otro objeto. Este objeto es el prototipo del objeto original. Si intentas acceder a una propiedad o método que no existe en el objeto, JavaScript buscará en su prototipo y, si no lo encuentra, seguirá buscando en la cadena de prototipos.


Creación de un Objeto con Prototipos:
Puedes crear un objeto y definir su prototipo usando la función  Object.create() , o puedes usar funciones constructoras.
## Creacion de un prototipo

Para crear un prototipo en JavaScript, primero debemos definir una función constructora que actuará como nuestra "clase". Esta función se encargará de inicializar las variables locales (propiedades) que utilizaremos. Luego, accederemos al prototipo de nuestra función constructora para añadir métodos que interactuarán con estas propiedades.

### Pasos para crear un prototipo
Definir la función constructora:
La función constructora es responsable de inicializar las propiedades del objeto.


Agregar métodos al prototipo:
Utilizamos  prototype  para añadir funciones que se pueden utilizar en las instancias creadas a partir de la función constructora. Esto permite que todas las instancias compartan los mismos métodos, ahorrando memoria.
````js
// 1. Definimos la función constructora
function Coche(marca, modelo) {
    // Propiedades locales
    this.marca = marca;
    this.modelo = modelo;
}

// 2. Agregamos métodos al prototipo de Coche
Coche.prototype.obtenerInfo = function() {
    return `Coche: ${this.marca} ${this.modelo}`;
};

Coche.prototype.arrancar = function() {
    console.log(`${this.marca} ${this.modelo} está arrancando.`);
};

// 3. Crear instancias de Coche
const coche1 = new Coche('Toyota', 'Corolla');
const coche2 = new Coche('Honda', 'Civic');

// 4. Usar los métodos definidos en el prototipo
console.log(coche1.obtenerInfo()); // 'Coche: Toyota Corolla'
coche1.arrancar(); // 'Toyota Corolla está arrancando.'

console.log(coche2.obtenerInfo()); // 'Coche: Honda Civic'
coche2.arrancar(); // 'Honda Civic está arrancando.'
```