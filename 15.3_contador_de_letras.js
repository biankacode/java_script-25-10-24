/* 3. Contador de letras: Crea una función que reciba una palabra y 
cuente cuántas veces aparece una letra específica dentro de ella. */

let palabra = "gato"

function contador(letra) {
    let retorna = ""
    for (let i = 0; i < letra.length; i++) {
       let letras =  letra[i]
        
       if (letras === "aeiou"){
        retorna = retorna + [i]
       }
    }
    return retorna
}
contador(palabra)