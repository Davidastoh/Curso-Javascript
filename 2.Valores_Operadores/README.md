# VALORES, TIPOS Y OPERADORES
## Indice
- [Tipos de datos o valores](#datos-y-valores)
- tipos (tipos de datos)
- operadores

## Datos y valores
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
````


