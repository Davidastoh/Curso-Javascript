# INTRODUCCION
- [Comentarios](#comentarios) 
- [Consola](#consola) 
- [Naiming](#naiming) 
  
## Comentarios
Es la parte dentro de mi archivo de codigo que no es leido ni ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlo para silenciar temporalmente partes del codigo *(comentar codigo)*.

## Tipos de Comentarios
1. **Una sola Linea**
   ```js
   //comentario de una sola linea
   ```
2. **Multiples Lineas**
   ```js
   /*
      *comentario de multilinea
      *coment 1
   */
   ```
3. **JsDoc**
   ```js
   /**
   *esta es una linea
   *esta es otra linea
   *
   ```
   Este tipo de comentario es muy usado para documentar el codigo, usado generalmente para la explicacion de funciones y clases en `Js`.[link del archivo](comentarios.js)

## Consola
   la herramienta mas usada[herramienta de JavaScript para depurar], dentro de los navegadores es usada para [depuracion](#depuracion) de nuestro codigo.

   > [!TIP]
   > ##### depuracion, es la tecnica que nos permite mostrar el codigo en las distintas faces del desarrollo, y verificar que el mensaje mostrado sea el correcto. Y verifiquemos que el codigo no tengo errores de sintaxis de logica o de precacion.
   ### Tipos de mensaje por consola
   #### 1. Notificadores: 
   > Mostrar un mensaje por consola:
    Ejemplo:
   ```js
   console.log("hola mundo") <!-- mensaje plano -->
   ```
   > Mostrar un mensaje de estilo informativo.
   ```js
   console.info("Mensaje informativo")
   ```   
   > Mostrar un mensaje de estilo o tipo alerta.
   ```js
   console.warn(" mensaje de tipo alerta")
   ```   
   > Mostrar un mensaje de estilo o tipo error.
   ```js
   console.error("Mensaje de error")
   ```   
   #### 2. Gestion de tiempo
   Es tipo de mensaje nos sirve para ver la duracion de ejecucion de nuestro codigo y para aptimizarlo para hacer uso de esta herraamienta tenemos que iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la duracion y finalmente terminar time de la consola con `timeEnd()`

   ```js
edad=18
if(edad<= 18){
    console.log("eres mayor de edad")
} else{
    console.warn("eres menor")
}
   ```
   #### 3. Tablas


## Interfaz de linea de comandos
> CLI Editor de texto que trabaja o funciona por la terminal ()
> GUI Posee interfaz grafica

#### 3. Tablas
Este tipo de mensaje por consola nos muestra la infromacion en una tabla.
Solo formateara a los datos de tipo `array` y `objetos`
```js
lenguajes=[
   {nombre:"javascript",extension:".js"},
   {nombre:"python",extension:".py"},
   {nombre:"php",extension:".php"}
]
```
[para ver los ejemplos has clic aqui](consola.js)

## Naiming
 Es la tecnica para nombrar variables, funciones  y clases dentro de un lenguaje de progracion.
 Las variables tienen reglas muy especificas que debemos seguir a la hora de designar sus nombres.
 ### Usos incorrectos
 
  - Debemos usaer nombres que expliquen que aporta esa variable a nuestro codigo.
  - No se pueden usar espacios.
>[!WARNING]
```js
#Incorrecto
con espacio=45
```
- No usar un numero delante
>[!WARNING]
```js
#Incorrecto
1numero=45
```
- Evitar simbolos y `snake_case`
>[!WARNING]
```js
#Incorrecto
dame$=45
#Incorrecto
con_guines_bajos="no es coorrecto"
```

### Usos correctos
- Debemos usar nombres que expliquen que aporta esta varibale a nuestro codigo.
- usar `CamelCase`
> [!TIP]
> ```js
> #Correcto
> edadAlumno=45
```