# Estructura del programa
## Indice
- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y declaraciones](#expresiones-y-declaraciones)
## Interaccion basica con el usuario
Podemos interactuar con el usuario desde javascript utilizando un metodo sencilllo que viene implementado en los navegadores.
El metodo es conocido como `Window` como el metodo de ventana, este metodo es un objeto que contiene o almacena  varias funciones entre ellas la de mostrar mensaje o pedir datos al usuario. 

- **Alert** Esta funcion nos muestra un mensaje en la pantalla.
  ```js
  windows.alert("Mensaje")
  ```
- **Confirm** Preguntar al usuario y ofrecer dos botones que se traducen en valores booleanos `Aceptar` (true) y `cancelar` o `Cerrar`(false).
```js
  windows.confirm("Quieres ser")
  //si deseamos capturar la respuesta, almacenaremos el codigo en una variable 
  respuesta=window.confirm("Quieres salir del closed?!")
```
- **prompt** Preginta al usuario y espera que se ingrese una respuesta
```js
  window.prompt("Como te llamas?")
  //si deseamos capturar la respuesta, almacenaremos el codigo en una variable 
  respuesta=window.prompt("Como te llamas?")
```
## Expresiones y declaraciones
- **Expresiones** - En javascript un fragmento de codigo que produce un valor es llamada `Expresion` tambien se dice que una `expresion`es el fragmento de una `oracion`
  ```js
  1
  "Hola"
  3*5
  5>4
  !True
  ``` 
- **Declaraciones** - En javascript es una oracion 
  ```js
  !True;
  let estado=!false;
  ```