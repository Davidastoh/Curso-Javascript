# Indice
- [Indice](#indice)
- [Estructura de datos](#estructura-de-datos)
  - [Lista o array](#lista-o-array)
    - [Creacion](#creacion)
    - [Acceder a un elemento del arrray](#acceder-a-un-elemento-del-arrray)
    - [Metodos](#metodos)
    - [Tarea averiguar que otros metodos existen para el tratamiento  de listas en javascript](#tarea-averiguar-que-otros-metodos-existen-para-el-tratamiento--de-listas-en-javascript)
  - [Objetos](#objetos)
    - [Creacion](#creacion-1)
    - [Acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
    - [Metodos](#metodos-1)
# Estructura de datos
A parte de los tipos de datos primitivos, javascript nos proporciona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipos de datos estructurados que trabajan de manera independiente o en conjunto.
Son los siguientes:

## Lista o array
las listas de javascript son un tipo de datos estructurados que nos permite almacenar dsitintod tipos de datos primitivos separados por comas, cada tipo de datoque se alamacena en una lista, se le conoce como elemento asi cada elemento estara separado por una coma. son un conjunto de datos que se pueden recorrer y modificar.
### Creacion
Primero debemos creear un enlace (una variable) y luego le asignamos la lista que se creecon `corchetes []`. los elementos estaran dentro de los corchetes separados por comas.
```js
//Estoy creando una lista vacia
let miLista=[]
//Creando una lista de numeros
let numeros=[1,2,3,4,5]
//Creando una lista de nombres 
let nombres=["Edwin","Jory","Nadinne","Adan"]
//Crear una lista mixta
let listaMixta = ["Juan",false, 42,["María",3,"Carlos",7],"Ana",100,"Luis",1]
```
### Acceder a un elemento del arrray
Para poder acceeder a un elemento del array debemos entender que javascript asignarar por cada elemento un indice que nos permitira acceder a un elemento en especifico este indice es incremental y comenzaba de cero con el primer alemento, el ultimo elemento sera la cantidad de elementos menos uno.
```js
let numeros=[1,2,3,4,5,6,7,8]
console.log(numeros[2])
```
Existe otra manera de accerder a los elementos de una lista, esto se logra recorriendo cada elemnto de una lista, esto se logra con un bucle `for`.
```js
let nombres=["Edwin","Primo","Crisbi"]
for (let i=0;i<nombres.length;i++){
  console.log(nombres[1])
}
```
### Metodos
son funciones que nos permiten crear actualizar y eliminar los elemntos de una lista,todas la variables que almacnen una lista nos permiten  acceder a sus metodos poniendo un puntos despues del nombre de la variable.
- Metodo para recuperar la logitud de elementos que tiene una lista
  ```js
  let numeros=[2,3,5,6,7,8]
  numeros.length
  ```
- Metodo para agregar un elemnto al final de la lista
  ```js
  let vocales=["a"]
  vocales.push("e")
  ```
- Metodo para eliminar el ultimo elemento de la lista
  ```js
  let vocales=["a","e"]
  vocales.pop()
  ```
### Tarea averiguar que otros metodos existen para el tratamiento  de listas en javascript
1. push()
Agrega uno o más elementos al final de un arreglo.

```js


let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "naranja"]

```
2. pop()
Elimina el último elemento de un arreglo y lo devuelve.

```js
let frutas = ["manzana", "banana", "naranja"];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "naranja"
console.log(frutas); // ["manzana", "banana"]

```
3. shift()
Elimina el primer elemento de un arreglo y lo devuelve.

```js
let frutas = ["manzana", "banana", "naranja"];
let primeraFruta = frutas.shift();
console.log(primeraFruta); // "manzana"
console.log(frutas); // ["banana", "naranja"]
```
4. unshift()
Agrega uno o más elementos al inicio de un arreglo.

```js
let frutas = ["banana", "naranja"];
frutas.unshift("manzana");
console.log(frutas); // ["manzana", "banana", "naranja"]
```
5. splice()
Cambia el contenido de un arreglo eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
```js
let frutas = ["manzana", "banana", "naranja"];
frutas.splice(1, 1, "kiwi"); // Elimina 1 elemento en la posición 1 y agrega "kiwi"
console.log(frutas); // ["manzana", "kiwi", "naranja"]
```
6. slice()
Devuelve una copia superficial de una porción de un arreglo en un nuevo arreglo.

```js
let frutas = ["manzana", "banana", "naranja"];
let algunasFrutas = frutas.slice(1, 3); // Desde el índice 1 hasta el 3 (sin incluirlo)
console.log(algunasFrutas); // ["banana", "naranja"]
```
7. forEach()
Ejecuta una función proporcionada una vez por cada elemento del arreglo.
```js
let frutas = ["manzana", "banana", "naranja"];
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// Salida:
// manzana
// banana
// naranja
```
8. map()
Crea un nuevo arreglo con los resultados de la llamada a una función proporcionada en cada elemento del arreglo.

```js
let numeros = [1, 2, 3];
let cuadrados = numeros.map(function(numero) {
    return numero * numero;
});
console.log(cuadrados); // [1, 4, 9]
```
9. filter()
Crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función proporcionada.
```js
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares); // [2, 4]
```
10. reduce()
Ejecuta una función reductora sobre cada elemento del arreglo, resultando en un único valor.
```js
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma); // 10
```
## Objetos
Los objetos son tipos de datos estructurados similares a la lista, para poder acceder a un elemneto de la lista, javascript les asignaba indices, en este caso los ebjetos como una diferencia de las lista nosotros le podremos asignar el nombre del ellemneto al cual deseamos acceder, a este se le conoce como `clave:valor`.
Cada clave:valor es un elementode un objeto si deseamos crear mas elementos tendermos que separarlos por comas `,` 
### Creacion
Para crear un objeto debemos encerrar los elemntos en llaves `{}` para cada elemneto estara conformado por su clave:valor

```js
let datosMax=["Max","Asto",20,"M"]
let datosMaxObjeto={
  nombre:"Max",
  apellido:"Asto",
  edad:20
  sexo:"Todos los dias"
  ganado:["El primo","Los chamos","Las enfermeras","Mineros"]
  direccion:{
    tipoCalle:"pasaje"
    nombreCallle:"Querobamba"
    numeroVivienda:222
    numeroCuarto:5
  }
  accion:()=>{console.log("Hola soy Max")}
}
```
### Acceder a un elemento del objeto
### Metodos