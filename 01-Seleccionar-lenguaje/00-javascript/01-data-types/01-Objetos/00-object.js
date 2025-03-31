// Objects u Objetos en JS
/*
Los objetos son una estructura de datos que permite tenes pares clave-valor
Por ejemplo un auto: podemos tener claves como: marca, modelo, color, año, motor, etc 
*/


//Para crear un objeto
// let auto = new Object();

let auto = {
    marca : 'Ford',
    modelo: 'Mustang',
    color: 'Gris',
    motor: "V8 5.0L",
}

console.log(auto) //{ marca: 'Ford', modelo: 'Mustang', color: 'Gris', motor: 'V8 5.0L' }


// Para modificar un valor específico de un objeto

auto.marca = "Audi"
auto.modelo = "A5"


console.log(auto) //{ marca: 'Audi', modelo: 'A5', color: 'Gris', motor: 'V8 5.0L' }


// Para eliminar una clave y su valor de un objeto

delete auto.motor;
console.log(auto) //{ marca: 'Audi', modelo: 'A5', color: 'Gris' }


