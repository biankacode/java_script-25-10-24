
/* 2.⁠ ⁠Cálculo de la Edad de Yoda
Descripción:
Yoda tiene más de 900 años, pero ¿exactamente cuántos? Vamos a calcular su edad.
Instrucciones:
Escribe un programa que pida al usuario la edad de Yoda cuando comenzó su entrenamiento 
Jedi y la edad que tiene ahora. Calcula cuántos años han pasado desde que comenzó su entrenamiento.
Pista:
Solicita dos números al usuario, réstalos y muestra el resultado usando print().

 */

let edadYoda = prompt("Cuantos años tiene Yoda?")
let entrenamientoYoda = prompt("Cuantos años lleva entrenando Yoda?") 

let añosEdad = edadYoda
let añosEntrenamiento = entrenamientoYoda

alert(`Yoda tiene ${edadYoda - entrenamientoYoda} años de edad`)