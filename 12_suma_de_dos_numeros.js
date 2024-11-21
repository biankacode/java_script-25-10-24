/* Ejercicio 1: Suma de números pares

Descripción: Crea una función que calcule la suma de todos los números pares en un rango dado.
Requerimientos:
La función debe recibir dos números como argumentos: el inicio y el fin del rango.
La función debe usar un ciclo for para iterar a través del rango.
La función debe retornar la suma de los números pares.
Pista: Utiliza el operador módulo (%) para determinar si un número es par. */
let numin = 20
let numfin = 30
let suma = 0
function sumaPares(numInicila, numFinal) {
    let resultado = numInicila + numFinal
    for (let i = numInicila; i <=numFinal; i++){
       if (i % 2  === 0){
      suma = suma + i
        console.log(suma); 
       }
      /*   console.log(numeros, i); */
    }
    return resultado  
}
console.log(sumaPares(numin, numfin));
 