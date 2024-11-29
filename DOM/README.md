# Indice
- [Indice](#indice)
- [DOM-Document Object Model](#dom-document-object-model)
  - [APIs](#apis)
    - [Selectores](#selectores)
# DOM-Document Object Model
Modelo de documento de objeto.
El dom es un conjunto de utilidades especificamente diseñadas para manipular documentos HTML.
El DOM transforma el archivo html en un arbol de nodos jerarquico facilmente manipulable
El DOM convierte todo el contenido del archivo HTML en un objeto de javascript.

- ***mi archivo index.html***
```html
<body>
    <h1 id="Titulo">titulo</h1>
    <p class="parrafo"> este es la descripcion de mi pagina</p>
    <ul>
       <li>primer elemento</li>
       <li>segundo elemento</li>
       <li>tercer elemento</li>
```
- ***mi archivo script.js***
```js
document:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"Titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"}
            Text:"este es la descripcion de mi pagina",
            child:null
        }
        {
            Element:ul,
            Attr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Attr:null,
                    Text:"Primer elemento"
                    child:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text:"Segundo elemento"
                    child:null
                },
                {
                    Element:li,
                    Attr:null,
                    Text:"Tercer elemento"
                    child:null
                }
            ]
        }
    ]     
}
```
DOM ademas de realizar el trabajo de convertir n archivo `html` en un objeto de javascript, nos ofrece una `API` (Aplication Programing Interfacez - Interfaz de Programacion de aplicaciones).
## APIs
### Selectores
los selectores nos permiten capturar una o varias etiquetas `html`, incluyendo sus atributos, contenido e hijso si lo tuviera.
Los selectores que podemos utilizar son variados podemos captura etiquetas a traves de de sus atributos como del nombre de la etiqueta misma.
los selectores son `funciones` si hablamos de poco entonces se puede decir que son `metodos`.
y son los siguientes:
- ***getElementById*** - Devuelve un elemento (etiqueta) que tengo un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")

```
> [!NOTE]
> Tecnologias para el procesamiento de texto a traves de marcado `markup` (etiquetas - que nos ´permite a traves de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La  primera tecnologia fue `XML`. Despues nace `html`, despues la ultima generacion de tecnologias de marcado de texto `markdown`.

