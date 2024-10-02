//ejemplos con operaciones de comparacion 
console.log(5>6) 

// esta operacion me generara un valor de tipo booleano
//Mayor que (>).
console.log(6>=6)
//No es igual
console.log(5!=7)
//NaN == NaN
console.log(NaN==NaN)

//Averiguar la forma que se realizar las comparaciones con cadena de texto

//Todas las letras mayusculas seran menores  a las minusculas
//Z<a
// Porque javascript compara los codigos unicode de cada caracter
// !>=?
//33>=63

console.log("!">="?")
// Ardvark < Zoroaster
console.log("Ardvark"<"Zoroaster")



// en el caso del operador && su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false)  //false
console.log(true && true)  //true


//OBSERVACION: Si ambos valores son verdaderos devolvera el sagundo valor.
console.log("hola" && "mundo")

//OBSERVACION: En caso que exista un valor verdadero y un falso devolvera el valor falso.
console.log(0 && "Hola")

//OJO: Los valores 0,NaN y una cadena vacia "" son considerados false


//en caso del operador or || produce verdaero si cualquiera de los valores dadosson verdaderos
console.log(false || false)  //false
console.log(true || false)  //true

//
respuesta="Te devuelvo los ositos tiernos"
console.log(respuesta || "Tu busqueda no existe")

console.log(0 || "")
//

// En el caso de not ! invierte el valor dado
console.log(!true)  //False
console.log(!false)  //True

// Usando operador relacional 
//OBSERVACION: Solo funciona en objetos o listas
console.log("Hola" in ["Hola", "mundo"])
 //Averiguar
//  El código que has proporcionado en JavaScript verifica si la cadena "Hola" está presente en el array  ["Hola", "mundo"] . La expresión  console.log("Hola" in ["Hola", "mundo"])  no funcionará como se espera, ya que el operador  in  se utiliza para verificar si una propiedad existe en un objeto, no para verificar la existencia de un valor en un array. 