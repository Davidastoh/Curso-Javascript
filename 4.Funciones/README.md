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
    - [Binding](#binding)
  - [La pila de llamadas](#la-pila-de-llamadas)
  - [CLOSURE o funciones de cierre(funciones que retorna funciones)](#closure-o-funciones-de-cierrefunciones-que-retorna-funciones)
    - [Closure de tipo clase](#closure-de-tipo-clase)
  - [Prototipos en JavaScript](#prototipos-en-javascript)
    - [Crear un Prototipo](#crear-un-prototipo)
    - [prototype](#prototype)
  - [RECURSIONES EN FUNCIONES](#recursiones-en-funciones)
    - [Conceptos Clave](#conceptos-clave)
    - [Ejemplo 1: Factorial](#ejemplo-1-factorial)
    - [Ejemplo 2: Secuencia de Fibonacci](#ejemplo-2-secuencia-de-fibonacci)
    - [Ejemplo 3: Suma de un Array](#ejemplo-3-suma-de-un-array)
    - [Ejemplo 4: Invertir una Cadena](#ejemplo-4-invertir-una-cadena)
  - [FUNCIONES CALLBACK](#funciones-callback)
    - [Conceptos Clave](#conceptos-clave-1)
    - [Ejemplo 1: Función Callback Simple](#ejemplo-1-función-callback-simple)
    - [Ejemplo 2: Callback Asíncrono](#ejemplo-2-callback-asíncrono)
    - [Ejemplo 3: Callback en Métodos de Arrays](#ejemplo-3-callback-en-métodos-de-arrays)
    - [Consideraciones](#consideraciones)
- [Clases](#clases)
  - [Esctructura de una clase en javascript](#esctructura-de-una-clase-en-javascript)
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

## Diferencias 
Las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es `binding`.
### Binding
Es una tecnica que guarda las funciones y variables.
(enlaces) sube al principio la declaracion , no el valor  a la cabecera del archivo javascript.
```js
despedida()
function saludo(){
    return "Hola"
}
function despedida(){
    return "Adios"
}
```
```js
saludo()
despedida()
```

## La pila de llamadas 
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.

***Averiguar sobre LIFO***
Alguritmo y estructura de de datos 

LIFO significa "Last In, First Out" (último en entrar, primero en salir) y es un método utilizado en contabilidad y gestión de inventarios. En este enfoque, los artículos más recientes en ser añadidos a un inventario son los primeros en ser vendidos o utilizados.

LIFO es un método de contabilidad y gestión de inventarios en el cual los últimos productos o artículos que ingresan al inventario son los primeros en ser vendidos o utilizados. Esto se aplica comúnmente en la contabilidad de costos y en la gestión de inventarios de empresas.

```js
//Programa que haga una ensalada
function cortarTomate(){
    console.log("Cortando tomates")
}
function cortarLechuga(){
    console.log("Cortando lechugas")
}
function cortarPepino(){
    console.log("Cortando pepino")
}
function cortarLimon(){
    console.log("cortar Limon")
}
function prepararEnsalada(){
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("Mezclar las verduras")
}
function comer(){
    prepararEnsalada()
    console.log("Comer la enssalada")
}

comer()
```

## CLOSURE o funciones de cierre(funciones que retorna funciones)
`closure` es una funcion que encapsula una serie de variabeles y definiciones locales que unicamente seran accesibles si son devueltas con la palabra reservada, keyword `return`.
antes de que aparezca la version `ecma6` los `closure` eran patrones creacionales que nos permitia modularizar nuestro codigo, en lugar de usar las `clases` que era populares en otros lenguajes pero que javascript aun no lo implemetaba.
```js
//una funcion que retorna otra funcion(Por lo general es una funcion anonima)
function retornaValor(n){
    return n+1
}
//function closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamnado a las funcion clasica
retornaValor(10)

//Function closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando a la function closure
returnaValor(10)()
```
>[!NOTE]
> las funciones closure son usadas porque puden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre, por cada llamada que se le realice.

### Closure de tipo clase
Son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con las funciones `closure` clasicas, es que en esta hacemos uso de la palabra reservada `keyword` llama `this`.
```js
let contador=1
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
    this.incre=function(){
        this.contador++
    }
    this.decre=function{
        this.contador--
    }
}
//realizamos la instancia
let count1=new contador()
count1.contador 
for(let i=0;i<5;i++){
    count1.incre()
}

```

>[!NOTE]
>la funcion closure de tipo clase no hace uso de `return` en sus funciones al hacer uso de `this` casa funcion variable estara anlazada al objeto que se cree.

>[!WARNING]
>El problema principal de este tipo de funcion es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservar espacios en espacio para toda la clase y su valor creado eso quiere decir variable y funciones, cada vez que llamamos a una funcion esta se replica en memoria.

## Prototipos en JavaScript
En JavaScript, cada objeto tiene una propiedad interna llamada  [[Prototype]] , que hace referencia a otro objeto. Este objeto es el prototipo del objeto original. Los prototipos permiten la herencia y la reutilización de métodos y propiedades entre objetos.

### Crear un Prototipo
A continuación, te muestro cómo crear un prototipo en JavaScript:

Definir una función constructora: Esta función se utiliza para crear instancias de objetos.
Agregar métodos al prototipo: Los métodos se añaden al prototipo de la función constructora para que todas las instancias compartan los mismos métodos.
```js
// 1. Definimos una función constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// 2. Agregamos métodos al prototipo de Persona
Persona.prototype.presentarse = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

// 3. Crear instancias de Persona
const juan = new Persona('Juan', 30);
const maria = new Persona('María', 25);

// 4. Usar el método definido en el prototipo
juan.presentarse(); // 'Hola, soy Juan y tengo 30 años.'
maria.presentarse(); // 'Hola, soy María y tengo 25 años.'

```
### prototype 
para crear un prototipo tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajaremos.
luego accederemos al prototype de nuestra funcion creada en valor o variable de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con nuestras variables locales.
```js
function contador(nombre){
    this.count=0
    this.nombre=nombre
}
contador.prototype={
    incremento:function(){this.count++}
    decremento=function(){this.count--}
    mostrarDatos=function(){return.${this.count},${this.nombre}}
}
```
>[!NOTE]
>Es una convencion usar como nombre de nuestra funcion principal, 1. Que debe ser singular. 2. Que use PascalCase.

## RECURSIONES EN FUNCIONES
 La recursión es una técnica en programación donde una función se llama a sí misma para resolver un problema. En JavaScript, la recursión se utiliza comúnmente para problemas que pueden dividirse en subproblemas más pequeños. A continuación, te explico cómo funcionan las funciones recursivas en JavaScript y te doy algunos ejemplos.

### Conceptos Clave
1. Caso Base: Es la condición que detiene la recursión. Sin un caso base, la función seguirá llamándose a sí misma indefinidamente, lo que puede causar un desbordamiento de pila (stack overflow).


2. Caso Recursivo: Es la parte de la función donde se llama a sí misma, resolviendo un subproblema.


### Ejemplo 1: Factorial
El factorial de un número ( n ) (denotado como ( n! )) es el producto de todos los números enteros positivos desde 1 hasta ( n ). Se puede calcular de forma recursiva de la siguiente manera:
```js
function factorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // Muestra: 120 (5 * 4 * 3 * 2 * 1)
```

### Ejemplo 2: Secuencia de Fibonacci
La secuencia de Fibonacci es una serie de números donde cada número es la suma de los dos anteriores. La serie comienza con 0 y 1. La función recursiva para calcular el enésimo número de Fibonacci es:

```js
function fibonacci(n) {
    // Caso base
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Caso recursivo
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso
console.log(fibonacci(6)); // Muestra: 8 (0, 1, 1, 2, 3, 5, 8)
```
### Ejemplo 3: Suma de un Array
Puedes usar la recursión para sumar todos los elementos de un array:
```js
function sumaArray(arr) {
    // Caso base
    if (arr.length === 0) {
        return 0;
    }
    // Caso recursivo
    return arr[0] + sumaArray(arr.slice(1));
}

// Ejemplo de uso
console.log(sumaArray([1, 2, 3, 4, 5])); // Muestra: 15 (1 + 2 + 3 + 4 + 5)
```
### Ejemplo 4: Invertir una Cadena
También puedes utilizar la recursión para invertir una cadena:
```js

function invertirCadena(cadena) {
    // Caso base
    if (cadena === "") {
        return "";
    }
    // Caso recursivo
    return cadena.charAt(cadena.length - 1) + invertirCadena(cadena.slice(0, -1));
}

// Ejemplo de uso
console.log(invertirCadena("Hola")); // Muestra: "aloH"
```
>[!NOTE]
>La recursión puede ser menos eficiente que las soluciones iterativas en algunos casos, especialmente si se realizan muchas llamadas recursivas, como en el caso de la secuencia de Fibonacci. Para estos casos, se puede usar memorización o programación dinámica para optimizar el rendimiento.
Siempre asegúrate de tener un caso base claro para evitar bucles infinitos y desbordamientos de pila.


## FUNCIONES CALLBACK

Las funciones callback en JavaScript son funciones que se pasan como argumentos a otras funciones y se invocan después de que se completa una operación. Este patrón es muy común en JavaScript, especialmente en la programación asíncrona, donde la ejecución de ciertas acciones puede depender de la finalización de otras.

### Conceptos Clave
1. Función Callback: Es una función que se pasa como argumento a otra función. Esta función puede ser llamada dentro de la función que la recibe.


2. Asincronía: Las funciones callback son especialmente útiles en operaciones asíncronas, como llamadas a APIs, temporizadores o eventos.


### Ejemplo 1: Función Callback Simple
Aquí tienes un ejemplo básico de una función que utiliza un callback:

```js

function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback(); // Llamada a la función callback
}

function despedir() {
    console.log("Adiós!");
}

// Usamos la función saludar con despedir como callback
saludar("Juan", despedir);
Salida:

Hola, Juan!
Adiós!
```
### Ejemplo 2: Callback Asíncrono
Un ejemplo más común de callbacks es en operaciones asíncronas, como la lectura de un archivo o una llamada a una API. Aquí hay un ejemplo utilizando  setTimeout  para simular una operación asíncrona:

```js

function obtenerDatos(callback) {
    console.log("Obteniendo datos...");
    setTimeout(() => {
        const datos = { id: 1, nombre: "Juan" };
        callback(datos); // Llamada al callback con los datos obtenidos
    }, 2000); // Simula un retraso de 2 segundos
}

function procesarDatos(datos) {
    console.log(`Datos recibidos: ID = ${datos.id}, Nombre = ${datos.nombre}`);
}

// Usamos la función obtenerDatos con procesarDatos como callback
obtenerDatos(procesarDatos);
Salida:



Obteniendo datos...
(Después de 2 segundos)
Datos recibidos: ID = 1, Nombre = Juan
```
### Ejemplo 3: Callback en Métodos de Arrays
Los callbacks también son comunes en métodos de arrays, como  map ,  filter  y  forEach . Aquí hay un ejemplo usando  map :
```js

const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(function(num) {
    return num * 2; // Callback que duplica cada número
});

console.log(dobles); // Muestra: [2, 4, 6, 8, 10]
```
### Consideraciones
1. Anidamiento de Callbacks: A veces, puedes encontrarte con el "callback hell" o "infierno de callbacks", donde los callbacks se anidan excesivamente, lo que puede hacer que el código sea difícil de leer y mantener. Para evitar esto, se pueden usar promesas o async/await.


2. Errores en Callbacks: Cuando trabajas con callbacks, es importante manejar adecuadamente los errores. A menudo, se pasa un primer argumento a la función callback que representa un error (si existe), seguido de los resultados.

>[!NOTE]
>Las funciones callback son una parte fundamental de JavaScript, especialmente en la programación asíncrona. Entender cómo funcionan te permitirá manejar mejor las operaciones que dependen de eventos o resultados de otras funciones.

# Clases
Las clases en jascript llega en la version `ecma script 6`, javascript no teni al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin embargo con la llegada de 
`ES6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la progrmacion orientada a objetos con la llegada de las `clases`

## Esctructura de una clase en javascript
Una clase esta separada en tres grandes secciones.
1. El nombre de la clase que debera ser en singular y deberan estar escritas en PascalCase.
2. Debera tener atributos estos deberan ser sustantivos y estar escritos en camelCase.
3. Debera tener metodos (acciones y funciones), estos deberan ser verbos o estar escritos en camelCase.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"        
    }
    //Metodos
    encender(){
        return "Estoy encendiendo..."
    }
    apagar (){ 
        return "Estoy cerrando secion y guardando informaciones antes del apagado..."
    }
    escribir(){
        return "escribir escribiendo mi informe"
    }
    jugar()`{
        return "estoy jugando dota..."
    }
    
}
// Instanciar
let miPC = new Computadora("gigabyte");
console.log(miPC.encender()); 
```