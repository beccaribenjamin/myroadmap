# Tipos De Conversion


Conversión de tipo (o encastre) significa transferencia de datos de un tipo de datos a otro. Conversión implícita ocurre cuando el compilador (para lenguajes compilados) o el tiempo de ejecución (para lenguajes de script como JavaScript) convierte automáticamente los tipos de datos. El código fuente también puede explícitamente requerir que tenga lugar una conversión.

Por ejemplo, dada la expresión "foo" + 1, el Número 1 se convierte implícitamente en un Cuerda y la expresión regresa "foo1". Dada la instrucción Number("0x11"), la cuerda "0x11" se convierte explícitamente al número 17.


## Pasar de String a Number

Para pasar un string a number, es decir una cadena de texto a un numero. Usamos 

```javascript

let string = "125",
let numero = Number(valor)

```
## De Number a String

Para pasar de Number a String, utilizo String()


```javascript

let num = 789456123,
let cadena = String(num)

```

## De Dates(fechas) a Numbers

El método Number() también lo podemos usar para convertir fechas

```javascript

let fecha = new Date()
let numero = Number(fecha)

```

## De Dates(fechas) a String

El método String() también lo podemos usar para convertir fechas

```javascript

let fecha  = new Date()
let string = String(fecha)

```


## De Booleans a Numbers

Al utilizar Number() con los datos booleanos obtenemos 1 o 0 dependiendo de si es verdadero o falso.

```javascript

let verdadero = true
let valorV    = Number(verdadero)
let falso     = false
let valorF    = Number(falso)

```
## De Booleans a Strings

Si utilizamos el método String() nos devuelve "true" o "false" dependiendo el caso

```javascript

let verdadero = true
let strV      = String(verdadero)
let falso     = false
let strF      = String(falso)

```
