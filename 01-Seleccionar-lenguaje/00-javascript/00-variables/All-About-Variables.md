# Javascript Variables

## Variable Declarations / Declarar una variable

### VAR
### LET
### CONST

## Scope & Hoisting

### Scope(Ámbito)

#### Qué es el Scope?

Se refiere a dónde una variable es accesible en el código.
Tenemos diferentes tipos de scope: `Global Scope` `Function Scope` `Block Scope`

#### Global Scope

```javascript

let nombre = "Juan"

function saludar() {
    console.log(nombre) //Se puede acceder al nombre desde dentro de la funcion porque es una variable global
}

```

#### Function Scope

Las variables declaradas dentro de una función solo accesibles dentro de esa función.

```javascript

function ejemplo() {
  let mensaje = "Hola";
  console.log(mensaje);
}

ejemplo();

//console.log(mensaje); ❌ Error: mensaje is not defined

```

#### Block Scope (con `let` y `const`)

Las variables declaradas dentro de un bloque ({ ... }) solo existen dentro de ese bloque si usas let o const.

```javascript

if (true) {
  let edad = 30;
  console.log(edad); // 30
}

// console.log(edad); ❌ Error: edad is not defined

```

### Hoisting (Elevación)

El hoisting es cuando JavaScript "eleva" las declaraciones al tope de su scope (antes de que el código se ejecute).

¿Qué se eleva?
Las declaraciones (var, funciones function nombre() {}) se elevan.

Las inicializaciones no se elevan (solo con var se permite acceder pero da undefined).

Ejemplos: 

#### Con var
```javascript

console.log(x) //undefined
var x = 5

```

#### Con let o const
```javascript

console.log(y); // ❌ Error: Cannot access 'y' before initialization
let y = 10;

```

#### Con Funciones
```javascript

saludar(); // "Hola"

function saludar() {
  console.log("Hola");
}

```


