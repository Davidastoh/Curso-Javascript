# Indice
- [Indice](#indice)
- [DOM-Document Object Model](#dom-document-object-model)
  - [APIs](#apis)
    - [Selectores](#selectores)
  - [Manipulacion de DOM](#manipulacion-de-dom)
  - [Propiedades dde los elementos DOM](#propiedades-dde-los-elementos-dom)
  - [Acciones o eventos con elementos en el DOM (Averiguar)](#acciones-o-eventos-con-elementos-en-el-dom-averiguar)
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

-***getElementByClassName*** - Devuelve un elemento (etiqueta) que tengo una clase especifica.
```html
<h1 id="Titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=document.getElementsByClassName("parrafo")
```

- ***querySelector** - Devuelve* el primer elemento que coincida con el selector ingressado puede ser un id, class, name o tag.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let parrafo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subtitulo=document.querySelector("h2")
```

***Averiguar que otros metodos para recorrer el DOM tiene javascript***

## Manipulacion de DOM
- **createElement** - Este metodo crea un elemneto HTML con el nombre que le pasemos por parametro 
```js
let titulo=document.createElement("h1")
```

- **appendChild** - Nos permite hacer hijo un elemento dentro de otro
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
**Métodos para Recorrer el DOM** 

1. getElementById: Selecciona un único elemento por su ID.

```js
let elemento = document.getElementById("miElemento");
```
2. getElementsByClassName: Devuelve una colección en vivo (HTMLCollection) de elementos que tienen el nombre de clase especificado.
```js
let elementos = document.getElementsByClassName("miClase");
```
3. getElementsByTagName: Devuelve una colección en vivo (HTMLCollection) de elementos que tienen el nombre de etiqueta especificado.
```js
let elementos = document.getElementsByTagName("div");
```
4. querySelector: Devuelve el primer elemento que coincide con un selector CSS especificado.
```js
let elemento = document.querySelector(".miClase");
```
5. querySelectorAll: Devuelve una lista estática (NodeList) de todos los elementos que coinciden con un selector CSS especificado.
```
let elementos = document.querySelectorAll("div.miClase");
```
6. parentNode: Devuelve el nodo padre del nodo especificado.
```js
let padre = document.getElementById("miElemento").parentNode;
```
7. childNodes: Devuelve una colección de nodos hijo de un nodo especificado (incluyendo nodos de texto).
```js
let hijos = document.getElementById("miElemento").childNodes;
```
8. firstChild: Devuelve el primer nodo hijo de un nodo especificado.
```js
let primerHijo = document.getElementById("miElemento").firstChild;
```
9. lastChild: Devuelve el último nodo hijo de un nodo especificado.
```js
let ultimoHijo = document.getElementById("miElemento").lastChild;
```
**Métodos para Manipular el DOM**
1. removeChild: Elimina un nodo hijo del DOM.
```js
let padre = document.getElementById("padre");
   let hijo = document.getElementById("hijo");
   padre.removeChild(hijo);
```
2. replaceChild: Reemplaza un nodo hijo por un nuevo nodo.
```js
let nuevoHijo = document.createElement("p");
   let hijoAntiguo = document.getElementById("hijoAntiguo");
   padre.replaceChild(nuevoHijo, hijoAntiguo);
```
3. insertBefore: Inserta un nuevo nodo antes de un nodo existente.
```js
let nuevoElemento = document.createElement("h2");
   let elementoReferencia = document.getElementById("referencia");
   padre.insertBefore(nuevoElemento, elementoReferencia);
```
4. setAttribute: Establece el valor de un atributo en el elemento especificado.
```js
let elemento = document.getElementById("miElemento");
   elemento.setAttribute("class", "nuevaClase");
```
5. removeAttribute: Elimina un atributo del elemento especificado.
```js
let elemento = document.getElementById("miElemento");
   elemento.removeAttribute("class");
```
6. textContent: Obtiene o establece el contenido de texto de un nodo y sus descendientes.
```js
let elemento = document.getElementById("miElemento");
   elemento.textContent = "Nuevo contenido de texto";
```
7. innerHTML: Obtiene o establece el contenido HTML de un elemento.
```js
let elemento = document.getElementById("miElemento");
   elemento.innerHTML = "<strong>Nuevo contenido HTML</strong>";
```
## Propiedades dde los elementos DOM
- **className** - Nos permite setear el nombre de la clase que tenga un elemento-
- **id** - Lo mismo que className pero con el atrbuto id.
- **innerHTML** - Devuelve o permite insertar codigo HTML (incluye tag y texto).
- **innerText** - Devuelve o permite insertar texto en un elemento.
- **textContent** - Nos permite agregar o modificar el contenido de un elemento.
- **value** - Nos permite obtener o setear valores de un elemento `input`.

## Acciones o eventos con elementos en el DOM (Averiguar)


1. click: Se activa cuando un elemento es clicado.
```js
document.getElementById('miBoton').addEventListener('click', function() {
       alert('Botón clicado!');
   });
```
2. mouseover: Se activa cuando el cursor del ratón se mueve sobre un elemento.

```js
document.getElementById('miElemento').addEventListener('mouseover', function() {
       this.style.backgroundColor = 'yellow';
   });
```
3. mouseout: Se activa cuando el cursor del ratón sale de un elemento.
```js
document.getElementById('miElemento').addEventListener('mouseout', function() {
       this.style.backgroundColor = '';
   });
```
4. keydown: Se activa cuando una tecla es presionada.
```js
document.addEventListener('keydown', function(event) {
       console.log('Tecla presionada: ' + event.key);
   });
```
5. submit: Se activa cuando un formulario es enviado.
```js
document.getElementById('miFormulario').addEventListener('submit', function(event) {
       event.preventDefault(); // Previene el envío del formulario
       alert('Formulario enviado!');
   });
```
<!-- permiten controlar los elemnetos de html Add Event Listener -->

- > [!NOTE]
> Tecnologias para el procesamiento de texto a traves de marcado `markup` (etiquetas - que nos ´permite a traves de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La  primera tecnologia fue `XML`. Despues nace `html`, despues la ultima generacion de tecnologias de marcado de texto `markdown`.

