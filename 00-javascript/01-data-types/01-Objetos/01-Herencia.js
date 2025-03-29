// Prototypal inheritance
// Herencia en Objetos

/*
En programación, a menudo queremos tomar algo y extenderlo.

Por ejemplo, tenemos un objeto usuario con sus propiedades y métodos, y queremos que admin e invitado sean variantes ligeramente modificadas. Nos gustaría reutilizar lo que tenemos en usuario, no copiar ni reimplementar sus métodos, sino simplemente construir un nuevo objeto sobre él.

La herencia de prototipos es una característica del lenguaje que ayuda en este sentido.

 */


// [[PROTOTYPE]]

/*
En JS, los objetos tinen una propiedad especial [[Prototype]], esto es nulo por defecto o hace referencia a otro objeto


Cuando queremos leer una propiedad desde un objeto, y esta falta. JS automaticamente la tomas desde el prototipo.

En programación, esto se llama "prototypal inheritance". 

Esta propiedad esta oculta y es interna, pero hay diferentes formas de obtenerla

*/


let animal = {
    eats : true,
}

let rabbit = {
    jumps : true
}

rabbit.__proto__ = animal

console.log(rabbit.eats) //Devuelve true




// Tambien podemos hacer lo siguiente


let animal1 = {
    eats : true,
}

let rabbit1 = {

    jumps: 20,
    __proto__: animal1

}

console.log(rabbit1.__proto__)