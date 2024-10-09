# Estructura del programa
## Indice
- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y declaraciones](#expresiones-y-declaraciones)
  - [Bindings (enlaces)](#bindings-enlaces)
  - [El entorno](#el-entorno)
  - [Control de flujo](#control-de-flujo)
    - [Contro de flujo historica](#contro-de-flujo-historica)
    - [Ejecucuion condicional](#ejecucuion-condicional)
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

  ## Bindings (enlaces)
  Cuando creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
  El bindings o enlace es la manera que javascript recuerda los valores y mantiene un estado interno asi como la reutilizacion de valores.
  **Como usamos los bindings en javascript**
  Para usar el bindings primero debemos usar la palabra reservada o `Keyword` de nombre `let` despues debemos darle un nombre para identificar el enlace, y luego asignarle el valor.
  ```js
  //Este es un enlace que puede apunatr a varios valores
  //Como un pulpito con muchos brazitos
  let edadPersona = 34
  //Si deseamos que nuestro enlace solo apunte a un solo valor osea un pulpito con un solo brazito, entonces para crear este enlace debemos hacer uso del keyword const
  const edad=45
  //Este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor
  ```
  > [!NOTE]
  > **Que nombre ponerle a nuestros enlaces**
  - El nombre de un enlace debera describir el valor al que esta enlazado, y debera estar escrita en `camelCase`.
  ```js
  //Quiero crear un enlace que tenga el valor de la fech actual
  //Incorrecto
  let yymmdd="2024/10/09" 
  //Correcto
  let fechaActual="2024/10/09"
  let edadActualAlumno=35
  ```
  
  ## El entorno
  El entorno es conocido el momento en el que se ejecuta el archivo javascript 
  El entorno al crearse no se crea vacio, dentro del entorno se crearan la coleccion de enlaces y valores.

  **Tarea** 
  - Averiguar mas sobre la ejecucion en linea de los entornos
  

  ## Control de flujo
  Una sentencia se ejecuta como si fuera una historia de arriba a abajo, por ejemplo:
  ```js
  let elNumero=prompt("Elige un numero")
  console.log(`Tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
  //Primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero
  ```
  ### Contro de flujo historica
  ### Ejecucuion condicional
  Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun la condicion 