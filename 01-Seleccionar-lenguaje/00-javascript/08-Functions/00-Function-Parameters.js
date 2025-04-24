// Funciones en Javascript

// Como declaramos una funcion

function saludar(nombre) {
    console.log(`Hola como estas ${nombre}?`)
}

// Luego llamamos a la funcion

saludar("Juan") //---> Hola como estas Juan?



// Parametros dentro de las funciones

/*

Podemos tener tanto parametros determiandos o por defecto como indeterminados
Vemamos primero los parametros indeterminados

*/

function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;

    return a * b;
}

multiply(5);    //---> 5
multiply(5,2);  //---> 10
multiply(5,25); //---> 125


// Parametros predeterminados

function saludar2(nombre = "Juan", apellido = "Perez"){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar2() //---> Hola Juan Perez
saludar2("Juan") //---> Hola Juan Perez
saludar2("Camilo", "Gomez") //---> Hola Camilo Gomez


// Parametros indeterminados


