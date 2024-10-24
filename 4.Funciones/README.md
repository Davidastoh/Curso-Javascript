# Indice
- [Indice](#indice)
- [Funciones](#funciones)
  - [Estructura de una funcion (¿Como se crea una funcion?)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros posicional](#argumentos-y-parametros-posicional)
    - [Argumentos y parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funciones como declaracion](#funciones-como-declaracion)
  - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
# Funciones 
las  funcionnes en javascript `bloques de codigo ejecutable`, reutilizar a los que podemos pasar parametros parametetros y operar con ellos.
Nos sirve para modular(Modularizar) nuestros programas de estructurarlos en bloquees que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecucion devuelven un valor, que conseguimos con el parametro `return`.

## Estructura de una funcion (¿Como se crea una funcion?)
Para crear una funcion debemos realizar los siguientes pasos:
1. Hacer uso del keyword `function`.
2. Darle un nombre a la funcion.
3. Crear los parametros que recibira entre parentesis `()`.
4. Crear el cuerpo de la funcion `{}`.
   ```js
   //Funciones con parametros
   function miFuncion(){
    console.log("Esta es mi funcion")
   }
   //Funciones con parametros 
   function mifuncionParametros(a){
    console.log("Tu parametro es",a)
   }
   //Funcion con varios parametros
   function funcionvariosParametros(a,b,){
    console.log(a+b)
   }
   ```
***Como ejecutamos una funcion***
Para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de us nombre y los parametros que recibira.
```js
//Creando la funcion
function saludo(){
    console.log("Hola")

//Ejecutamos la funcion 
saludo()

function saludo2(texto){
    console.log("Hola: ", texto)
}
}
//Ejecutar 
saludo2("Jory")
```
[!NOTE]
> ***Reglas para poner el nombre s uns funcion***
> Los nombres de las funciones deben representar acciones, por lo que se deben construirse usando el verbo  que representa la accion seguido de un sustantivo representara a la entidad 
```js
function crearUsuario(){

}
function enviarCorreo(){

}
```

## Tipos de argumentos y parametros
Es la manera como se reemplazan los argumentos con los parametros.
### Argumentos y parametros posicional
Posicionales se llama por que los argumentos tomaran parametros en el orden que se le pasa a la funcion, segun la posicion entre argumentos y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicioanles
let respuesta=sumaNumeros(2,4,6,8)
console.log(respuesta)
```
### Argumentos y parametros Nominales
Se les conoce a los argumento que en su creacion se asocian a un parametro en especifico.
```js
function registroAlumnos(nombre,apellidos,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
//Nominal
registroAlumnos(sexo="Primo", nombre="Edwin", apellido="Del Mar")

//Posicional
registroAlumno("Jory","Rodriguez","Todos los dias")
```
>[!INFO]
> Posicionales en orden y nominales especificar el parametro y su valor.

## Tipos de funciones por su notacion
### Funciones como valor 
En este caso se crea una funcion como si fuera un valor de un enlace. 
```js
let saludo=function(){
    console.log("Hola")
}
saludo()
```
El nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis `()` al igual que una funcion clasica podemos psarle parametros.

### Funciones como declaracion
Se le conoce como funcion `declarativa` a la manera clasica como creamos una funcion 
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludo())
```

## Funcion de flecha (arrow function)
Esta funcion es introducida a partir de la version de ecma script 5 `es5`.
Se implemento para la creacion y ejecucion rapida y mas intendible de las funciones.
La funcion flecha evita la `verbosidad` en javascript.
>[!Note]
> `verbosidad` o `verboso` se utiliza en la programacion para refirirse a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una seria de reglas podemos comparar la `verbosidad` a un texto demaciado extenso o redundante.
Se crea de la misma maera que una funcion como valor, eso quiere decir que al funcion flecha sera el valor de un enlace.
La funcion flecha tiene la siguiente estructura.
El parametro seguido del simbolo flecha `=>` y del cuerpo de ser necesario o solo de codigo que ser retornara.
```js
//Funcion verbosa
function saludo(){
    return "saludo a todos"
}
console.log(saludo())

//Funcion flecha

let saludo=()=>("Hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("Hola, ", texto)
console.log(mensaje("El primo"))

//En el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo

let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre}, ${apellido}`
    return alumno
}

console.log(registroUsuario("Edwin","Cachondo"))
```

### Diferencias 