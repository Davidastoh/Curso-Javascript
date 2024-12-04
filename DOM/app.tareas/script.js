let input=document.querySelector("#tareas")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

// button.addEventListener("click",()=>{
//     let li=document.createElement("li")
//     li.textContent=input.value
//     ul.appendChild(li)
//     input.value=" "
// })
// button.addEventListener("click", () => {
//     ul.innerHTML+=`
//     <li>${input.value}<button id="delete">eliminar</button></li>
//     `
//     input.value=""
// })
// let eliminar=document.querySelector("#delete")
// eliminar.addEventListener("click",()=>{
// })

button.addEventListener("click", ()=>{
    // let li=document.createElement("li")
    // li.textContent=input.value
    // ul.appendChild(li)
    ul.innerHTML += `
        <li>
            ${input.value}
            <button class="delete">eliminar</button>
        </li>
    `;
    input.value = "";
})
// let eliminar=document.querySelector("#delete")
// eliminar.addEventListener("click" ,()=>{
//     ul.removeChild(li)
// })
ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.classList.contains("delete")) {
        let li = e.target.parentElement; 
        ul.removeChild(li);
    }
});
