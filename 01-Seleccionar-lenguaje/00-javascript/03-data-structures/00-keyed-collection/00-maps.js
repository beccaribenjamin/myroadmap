
/**
-----------------------------------------------------Objeto MAP-----------------------------------------------------
Un objeto MAP es un amapa de clave/valor simple y puyede iterar sobre sus elementos en el orden que fueron insertados

*/


let sayings = new Map();

sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (let [key, value] of sayings) {
    console.log(key + " goes " + value);
}

sayings.clear();
sayings.size;