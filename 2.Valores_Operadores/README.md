# VALORES, TIPOS Y OPERADORES
## Indice
- [VALORES, TIPOS Y OPERADORES](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [valores](#valores)
  - [Valores](#valores-1)
    - [Datos primitivos](#datos-primitivos)
      - [- Numeros (numbers)](#--numeros-numbers)
      - [Nomeros especiales](#nomeros-especiales)
      - [Aritmetica (Operadores aritmeticos).](#aritmetica-operadores-aritmeticos)
      - [Cadenas](#cadenas)
      - [Concatenacion](#concatenacion)
      - [Plantillas literales](#plantillas-literales)
      - [Operadores Unarios](#operadores-unarios)
      - [Valores booleanos](#valores-booleanos)
      - [Operador ternario](#operador-ternario)
## valores
Imagina un mar de bits.
Una computadora moderna tiene mas de 100 mil millones de bits almacenadas en su `memoria de trabajo` o `memoria principal` o `memoria volatil` o `ram`
<!-- desbordamiento de pila -->
Ahora la `memoria no volatil` o `memoria secundaria` tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
## Valores
Cuando nosotros programamos hacemos uso de la `memoria de trabajo`
para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, javascripts ordena los bits en pequeñas partes o piezas de informacion a esto se le conoce como `valores` 
cada valor tiene una funcionalid dsitinta puede ser un numero, un texto o una funcion.
Cuando hablamos de tipos de datos en javascript nos referimos a su representacion binaria y al tipo de valor que usamos

### Datos primitivos
Son aquellos datos que ya existen, no pueden ser creados, actualizados ni eliminados wsolo pueden ser llamados para el uso que deseamos darle. los datos primitivos son:

#### - Numeros (numbers)
Los valores de tipo numero, comoes de esperar son numeros, y en javascript se escribe o se hacer el llamado de este valor de la siguiente manera.

- Numero de tipo entero
```js
20
//Estamos usando un patron de bits para el numero 20 que existia dentro de la memria de trabajo
```
- Numero de punto flotante decimal fraccion 
```js
2.7
0.1
6.9
//Javascript Siempre asigna un bit para el punto

```
>[!TIP]

Cuando javascript hace trbajo de memoria (Cuando crea un patron de bits para alamcenar) todo numero son almacenados como decimal positivo.
javascript alamcena menos numeros negativos que positivos 

> en positivo de 0->99.9

> en negativos de 0->-9.9

- Numeros  notacion cientifica
```js
2.876e8
//2.876 * 10^8

```
>[!WARNING]

Cuando javascript realiza operaciones con numeros enteros el resultado siempre sera exacta, cuando realice operacion con numeros decimales el resultado perdera precicion por que solo tiene 64 bits para alamcenar el numero, esto suele ocurrir con el resultado cuyos decimales sean infinitos como el caso del numero PI.

**Es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores.**

```js
//dato numerico de tipo entero
//entero positivo
20
//entero negativo
-20
//decimal positivo
2.7
//decimal negativo
-2.7
//notacion cientifica
2.876e8
//notacion cientifica negativa
-2.876e8
```

#### Nomeros especiales
En javascript existen tres valores de tipo numeros especiales que se consideran un dato primitivo numerico de tipo especial
```js
Infinity
- Infinity
NaN
//Cuando el resultado de una operacion es matematicamente imposible.
```
#### Aritmetica (Operadores aritmeticos).
par esto tenemos los operadores basicos de la aritmetica
```js
- suma (+)
- resta (-)
- multiplicacion (*)
- division (/)
- potenciacion (**)
- modulo (%)
- incremento (++)
- decremento (--)
```
** Podemos agrupar operaciones con parentesis () las operaciones que este entre los parentesis **
consulta los archivos de operadores [aqui](.Operadores.js) ve los ejercicios [aqui](.Operadores.js)

#### Cadenas 
El siguiente tipo de dato primitivo es la `cadena` - `string`.
¿Para que sean las cadenas en javascript?
- Para reprensentar textos
- Se escribe encerrando su contenido entre comillas:
```js
//Cadenas con contenido
"Soy un texto" //comillas dobles
'tambien soy un texto'//comillas simples
`yo tambien soy`//acento grave

//Cadenas vacias
""
''
``
```
**Problema** - Como reprensentamos un texto entre comillas para hacer el uso de comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
//Si nuestro texto tiene que estar entre commilas siemples 
"'este texto se muestra entre comillas simples'"
//Si nuestro texto tiene que estar entre commilas dobles
'"este texto se muestra entre comillas simples"'
//Si nuestro texto tiene que estar entre commilas dobles como siemples 
`'este texto estan en comillas simples',"este texto esta en comillas dobles"`
```
otra manera de hacer lo antes mencionado uso de la barra invertida `\` como tambien conocida como `caracteres de escape` 
Hacer uso de este caracter indica que el caracter posterior tendra un significado especial.
```js
"De este texto solo esta \"palabra\" estara en comillas"
el acento grave se incorporo en ecma script 6, antes era con caracter de scape
```
**Problema** - deseamos agregar un salto de linea en nuestro texto
```js
//solucionamos este problema haciendo uso de los acentos graves
`primera linea
segunda linea`
```

Antes de la incorporacion de ecma script 6 en el uso de acentos graves `` se utilizaba el caracter de scape `\`

```js
"esta es mi primera linea \n y esta es la segunda linea 
```

**Problema** - Deseo tabular un texto
```js
`
este texto no esta tabulado
    este texto no esta tabulado
`
```
Ahora tabularemos haciendo uso del caracter de scape
```js
`si tabular \t y tabulado`
```
#### Concatenacion 
el unico operador aritmetico que puede ser usado por cadenas es el operador de suma (+) puede ser usado en dos o mas cadenas y pasa a llamarse operador de concatenacion, lo que realizar es unir cadenas en una sola.
<!-- Si el simbolo mas esta entre dos cadenas es un operador de cincatenacion -->
```js
"Hola"+" "+"Mundo"
```
#### Plantillas literales
las plantillas literadas mencionadas con el acento grave son usadas para mostrar textos literal, tambien nos permite ejecutar codigos javascript dentro de una plantilla literal el codigo o el resultado de este codigo seratransformado en un dato de tipo texto y se incluira en la pisicion en que se encuentre.
Para hacer uso de esta funcionalidad debemos usar la siguiente expresion `${}`
```js
//Creando plantilla literal - template literals
``
//javascript dentro de una plantilla literal
`La suma de 1+1 es ${1+1}`
```
>[!TIP]
Se dice literal porque en el formato que codificamos sera mostrado de esa misma forma en la consola 

#### Operadores Unarios
No todos los operadores son simbolos,matematicos, tambien existen operadores unarios que son aquellos que no tienen operandos, se escriben como palabras.

Un ejemplo es el operador `Typeof`, este operador produce un valor de cadena que indica el tipo del valor que te proporcionamos

`operadores binarios` se les conoce porque opera sobre dos valores`2*5`
`operaador unario`porque trabaja con un solo valor 

```js
//Para poder ver su funcionalidas o el valor que genera  siempre debemos mostrar en un console
console.log(typeof 5)
```
#### Valores booleanos
Este tipo de dato primitivo es util cuando tengamos un valor que distinga solo entre dos posibilidades, como `si` y `no` o `Encendido` y `Apagado`
Para este proposito, Javascript tiene un tipo de dato ` Booleano` que tiene solo dos valores `true` y `false`.

**¿Que formas de producir valores booleanos tenemos?**
1. **Usando valores de comparacion**
los operadores de comparacion son los siguientes 
- Mayor que (>).
- Menor que (<).
- Mayor o igual que (>=).
- Menor o igual que (<=).
- Igual a (==).
- Estrictamente igual (===).
- No es igual a (!=).
2. **Usando los Operadores Logicos**
Javascript supera 3 operadores logicos 
- And (Y) representacion e javascript `&&`.
- Or (o) representacion en javascript `||`.
- Not (no) representacion en js `!`
**observacion** este es un operador unario que su funcion es invertir el valor que tiene a su derecha `!true` produce `false`
>[!TIP]
>**AND `&&` `??`** 
- Si tenemos dos valores verdaderos devolvera el segundo valor verdadero, si tenemos un valor falso y uno verdadero devolvera el falso.

>[!TIP]
>**or `||`** 
- Si tenemos dos valores verdaderos devolvera el primer valor verdadero, si tenemos un valor falso y uno falso devolvera el valor verdadero.

3. **Usando el operador relacional**
   
Este operador compara sus valores y retorna un booleano como resultado , lo que evalua este operador es si un propiedad especifica se encuentra en un objeto.
Evalua que si el primer valor que se encuentra a su izquierdad existe o farma parte del segundo valor que se encuentra a su derecha.
```js
"a" in ["a","e","i","O","u"]
```
#### Operador ternario
Este operador trabaja con 3 valores 
El primer valor es el que determinara si se muetysra el resto de valores.
Eso quiere decir que si el primer valor es verdadero mostrara el segundo valor, y si el primer valor es falso mostrara el tercer valor.





