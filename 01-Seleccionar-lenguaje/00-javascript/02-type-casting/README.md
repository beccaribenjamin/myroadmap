## Type Conversions


Los operadores y las funciones convierten automáticamente los valores que se les dan al tipo correcto
Por ejemplo:
Alert convierte automáticamente cualquier valor en una cadena para mostrarlo. Las operaciones matemáticas convierten valores en números.

También hay casos en los que necesitamos convertir explícitamente un valor al tipo esperado.


# String Conversion

Si queremos que un valor sea devuelto en string podemos hacer uso de String(valor)

```javascript

let valor = true,
let cadena = String(valor)

```
# Number Conversion

Ahora si queremos pasar de String a Number tenemos que usar Number(valor)


```javascript

let str = "55",
let cadena = Number(str)

```

