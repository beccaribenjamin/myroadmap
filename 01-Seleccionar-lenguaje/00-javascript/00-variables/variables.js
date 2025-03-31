// Todo sobre variables en JS

//Qué es una variable? ---> Espacio en memoria donde podemos almacenar información

// Cómo declaro una variable ?

/*
Tenemos 3 formas con palabras reservadas de JS
VAR
LET
CONST
*/

//Ejemplo con var

var nombre = "Pedro";

//Ejemplo con let

let provincia = "Buenos Aires";

//Ejemplo con const

const apellido = "Perez"



// En el caso de los var y let
// Podemos reasignarle un valor. Suponiendo que tenga una variable que almacena la edad

let edad = 23

// El año siguiente va a ser 24

edad = 24



// COn las constantes yo no puedo cambiar su valor, una vez que le asigno un valor, no se lo puedo cambiar

const pais = "Argentina"
console.log(pais) // Devuelve en consola Argentina
pais = "Colombia" // Arroja error

