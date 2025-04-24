# Functions / Funciones

## ¿Qué son las funciones ? 

Las funciones son bloques de contrucción fundamentales en JS.
Podemos definirlas como un conjunto de instrucciones que realiza una tarea o calcula un valor.

## Definir funciones

Estructura de las funciones

```javascript
function multiplicar(num1, num2){
    return num1 * num2
}
```

## Llamar a las funciones

Siguiendo con el caso anterior, por si sola no hace nada, hay que llamarla para que se ejecute

```javascript
function multiplicar(num1, num2){
    return num1 * num2
}
multiplicar(5,2) //---> Retorna un valor que es 10
```

## Parámetros de una función

### Parámetros predeterminados
En JavaScript, los parámetros de las funciones están predeterminados en undefined. Sin embargo, en algunas situaciones puede resultar útil establecer un valor predeterminado diferente. Esto es exactamente lo que hacen los parámetros predeterminados.

Sin parámetros predeterminados (preECMAScript 2015)
En el pasado, la estrategia general para establecer valores predeterminados era probar los valores de los parámetros en el cuerpo de la función y asignar un valor si eran undefined.

En el siguiente ejemplo, si no se proporciona ningún valor para b, su valor sería undefined al evaluar a * b, y una llamada a multiply normalmente habría devuelto NaN. Sin embargo, esto se evita con la segunda línea de este ejemplo:

```javascript
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiply(5); // 5
```

### Parámetros Predeterminados (Luego de ECMAScript 2015)

Con parámetros determinados, ya no es necesaria una verificación manual en el cuerpo de la función. Simplemente puedes poner 1 como valor predeterminado para b en el encabezado de la función:

```javascript
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

## Arrow Functions / Funciones flecha 
