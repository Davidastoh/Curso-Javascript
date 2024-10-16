// *2. Pedir al usuario una contraseña que debera ser verificada en una condicion simple si es la contraseña correcta.*

const contraseña = prompt("Ingresa la contraseña: ");
console.log(contraseña === "Contraseña123" ? "Correcta" : "Incorrecta")