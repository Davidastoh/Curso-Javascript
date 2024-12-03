// let parrafoDos = document.getElementById("dos")
// let texto=prompt("Ingresa un texto")
// parrafoDos.textContent=texto

//<div id="miId" class="miClase style="background:red; width:200px;height:200px"></div>
let newElement=document.createElement("div")
newElement.id="miId"
newElement.className="miClase"
let respuesta=prompt("escribe color azul o rojo para ver el cuadro")
if (respuesta=="rojo"){
    newElement.className="cuadro_rojo"
}
else{
    newElement.className="cuadro_azul"
}

// newElement.style="background:black; width:600px;height:700px"
let body=document.querySelector("body")
body.appendChild(newElement)