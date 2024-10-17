/* 3.⁠ ⁠Identificación del Lado Oscuro
Descripción:
La Orden Jedi necesita identificar a aquellos que están en el lado oscuro de la Fuerza.
 Tu tarea es decidir si un personaje pertenece al lado oscuro según el poder que tenga.
Instrucciones:
Escribe un programa que reciba un número (representando el poder de la Fuerza de un personaje).
 Si el número es divisible por 2, muestra "El personaje está en el Lado Oscuro". Si no lo es, muestra 
 "El personaje está en el Lado Luminoso".
Pista:
Usa el operador % para verificar si un número es divisible por 2.
 */

let seleccionPesonaje = parseInt(prompt("Cual es tu personaje favorito, 1: Palpatine, 2: Darth Vader, 3: Conde Dooku, 4: Yoda, 5: Darth Maul, 6: Chewbacca "))

let personajes = seleccionPesonaje % 2

if(personajes === 0){
 alert("El personaje está en el Lado Luminoso");
} else if(personajes === 1 ) {
    alert("El personaje está en el Lado Oscuro");
} else{
    alert("Escoje un personaje");  
}