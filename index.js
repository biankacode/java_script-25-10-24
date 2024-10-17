/* 4.⁠ ⁠Conversión de Parsec a Años Luz
Descripción:
Han Solo siempre presumía de que el Halcón Milenario hizo el Kessel Run en menos de 12 parsecs. 
Ahora es tu turno de calcular cuántos años luz son esos 12 parsecs.
Instrucciones:
Escribe un programa que convierta una cantidad dada en parsecs a años luz.
 Un parsec equivale a aproximadamente 3.26 años luz.
Pista:
Multiplica el número de parsecs por 3.26 para obtener los años luz. */

let parsecs = parseInt(prompt("Cuantos parses ha viajado el Halcón Milenario?"))

let añosLuz = parsecs * 3.26
console.log("Has viajado " + añosLuz + " años luz");
