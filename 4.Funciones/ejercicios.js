//Haciendo uso de las funciones de tipo closure
//Ejercicio 1
//pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años, en ese caso mostraremos un mensaje de vienvenida mas el nombre que ingreso el ususario


// function bienvenida() {
    
//     const usuario = {
//         nombre: prompt("Ingresa tu nombre:"),
//         edad: parseInt(prompt("Ingresa tu edad:"), 10),


//         verificarEdad: function() {
//             if (this.edad > 18) {
//                 console.log(`Bienvenid@, ${this.nombre}. Eres mayor de edad y puedes llevar el curso de Programación del profe alvares.`);
//             } else {
//                 console.log(`Lo siento ${this.nombre}, debes tener más de 18 años para llevar el curso, vuelve en unos años`);
//             }
//         }
//     };


//     return usuario.verificarEdad(usuario);
// }

// const saludo = bienvenida();
// saludo();

//Ejercicio 2
//Crear un programa que pida registrar el nombre de un producto y el usuario podra eliminar el producto o actualizar el nombre del producto.
//Observacion al realizar la actualizacion podre ver el valor anterior como el valor nuevo


function usuarioAdmin(){
    this.nombreProducto = prompt("Ingresa el nombre del producto:");

    this.mostrarProducto = function(){
        console.log(`Producto actual: ${this.nombreProducto}`);
    };

    this.actualizarProducto = function(){
        const nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");
        console.log(`Actualización: Producto anterior: ${this.nombreProducto}, Nuevo producto: ${nuevoNombre}`);
        this.nombreProducto = nuevoNombre;
    };

    this.eliminarProducto = function(){
        console.log(`El producto "${this.nombreProducto}" ha sido eliminado.`);
        this.nombreProducto = null;
    };
}
const adminProducto = new usuarioAdmin();
adminProducto.mostrarProducto();       
adminProducto.actualizarProducto();    
adminProducto.mostrarProducto();       
adminProducto.eliminarProducto();