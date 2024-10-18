/* Ejercicio: Contar números positivos y negativos
Descripción: Escribe un programa que reciba una lista de números enteros 
y cuente cuántos de ellos son positivos y cuántos son negativos. Al final,
el programa debe mostrar ambos conteos.
Instrucciones:
Pide al usuario que ingrese una lista de números separados por comas.
Usa un ciclo for para recorrer la lista de números.
Usa la estructura condicional if para verificar si cada número es positivo o negativo.
Lleva la cuenta de cuántos números positivos y negativos hay.
Al final, imprime el resultado.
Pista:
Un número es positivo si es mayor que 0 y es negativo si es menor que 0.
 */

let numeros = prompt("ingresa 10 numeros positivos y negativos, separados por comas");
let conversionDeNumeros = numeros.split(",").map(numeros => parseInt(numeros.trim()));
let listaNumeros = conversionDeNumeros
/* let listaNumeros = [3, -1, 5, -2, 7, -6, 0, 8];  */

let numPositivos = []
let numNegativos = []

for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > 0) {
        numPositivos.push(listaNumeros[i])
    } else if (listaNumeros[i] < 0){
        numNegativos.push(listaNumeros[i]) 
    }
}

console.log("Lista de numeros Negativos: "+ numNegativos);
console.log("Lista de numeros Positivos: "+ numPositivos);


/*    let num = [ -9, -12, -4, -6, -2]

   for(let i = 0; i < num ; i++ ){
    console.log(i);
    
   } */