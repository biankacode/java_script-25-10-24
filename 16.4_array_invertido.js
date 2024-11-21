/* 4. Array invertido: Escribe una función que reciba un array
 y devuelva el mismo array pero en orden invertido. */

 let arrayNum = [1,2,3,4,5,6,7,8]
let disminucion = []
 function invertirArray(array) {
    for (let i = array.length -1 ; i >= 0; i--) {
     disminucion.push(array[i]) /* agregar .push al array vacio disminucion */
    }
    return disminucion
 }
 console.log(invertirArray(arrayNum));
 