/*  ⁠El Consejo de los Tres Maestros
Contexto temático:
Tres Maestros Jedi están decidiendo quién será el líder de la próxima misión diplomática,
 y tu tarea es ayudar a determinar quién tiene más experiencia.

Descripción:
Dado tres números que representan los años de experiencia de cada Maestro Jedi, 
encuentra cuál es el mayor.

Instrucciones:
Escribe una función que reciba tres números enteros y devuelva el mayor de ellos.

Pista:
Utiliza las comparaciones if para determinar cuál de los tres números es el mayor. */

let edades = (prompt("Cuales son sus edades?"));
let edad = edades.split(',').map(Number);

let maxEdad = Math.max(...edad)
console.log("El es le mayor : " + maxEdad);
