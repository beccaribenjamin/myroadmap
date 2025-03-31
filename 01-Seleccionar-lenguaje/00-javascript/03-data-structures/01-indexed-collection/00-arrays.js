/*

-------------------------------------------------ARRAYS-------------------------------------------------

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. 
Tanto la longitud como el tipo de los elementos de un array son variables. 
Dado que la longitud de un array puede cambiar, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos

*/

// Crear un array

let frutas = ["Manzana", "Banana"]
console.log(frutas)

// Acceder a un elemento segun su índice

let primerValor = frutas[0]
let ultimovalor = frutas[frutas.length - 1 ]


// --------------------------------------------------------Recorrer un Array--------------------------------------------------------

// Método FOREACH, ver tambien map

frutas.forEach( (fruta, indice) => {
    console.log(fruta, indice)
})


// ---------------------------------------------------Añadir un elemento al array---------------------------------------------------

// Puede ser al final con el método push()
let nuevofinal = frutas.push("Naranja")

// Puede ser al final con el método unshift()
let neuvoinicio = frutas.unshift("Naranja")

// --------------------------------------------------Elimianr un elemento del Array--------------------------------------------------

// Puede ser al final con el método pop()
let eliminarFinal = frutas.pop()

// Puede ser al final con el método shift()
let eliminarInicio = frutas.shift()


// ------------------------------------------------Encontrar el indice de un elemento------------------------------------------------

let posicion = frutas.indexOf('Banana')



