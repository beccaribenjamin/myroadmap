/**
-------------------------------------------------------WAKEMAP-------------------------------------------------------
l objeto WeakMap es una colección de pares clave/valor en la que las claves solo son objetos y los valores pueden ser valores arbitrarios. 
Las referencias de objeto en las claves se mantienen débilmente, lo que significa que son un objetivo de recolección de basura (GC por Garbage Collection) si ya no hay otra referencia al objeto. La API de WeakMap es la misma que la API de Map.
Una diferencia con los objetos Map es que las claves en WeakMap no son enumerables (es decir, no hay ningún método que te proporcione una lista de las claves). Si lo hubiera, la lista dependería del estado de la recolección de basura, introduciendo el no determinismo.

*/

/*
Un caso de uso es almacenar datos privados para un objeto u ocultar detalles de implementación.
privates ---> Almacena información que no se puede utilizar por fuera
Mientras el resto es publico

*/

const privates = new WeakMap();

function Public() {
  const me = {
    // Los datos privados van aquí
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Hacer cosas con datos privados en `me`...
};


