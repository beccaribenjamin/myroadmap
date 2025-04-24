// Funciciones flecha 

/*

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional
Diferencias y limitaciones:

✖️No tiene sus propios enlaces a this o super y no se debe usar como métodos.
✖️No tiene argumentos o palabras clave new.target.
✖️No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
✖️No se puede utilizar como constructor.
✖️No se puede utilizar yield dentro de su cuerpo.

*/

// Ejemplos de funciones flecha

// Array map con funciones flecha

const numeros = [1, 2, 3, 4, 5]

const cuadrados = numeros.map(numero => numero * numero)
console.log(cuadrados) //---> [1, 4, 9, 16, 25]

// Simplificar ternarios 

const esPar = n => n % 2 === 0 ? 'Par' : 'Impar';
console.log(esPar(5)) //---> Impar
console.log(esPar(7)) //---> Impar
console.log(esPar(4)) //---> Par
console.log(esPar(6)) //---> Par

