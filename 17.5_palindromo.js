/* 5. Palíndromo: Crea una función que determine si una palabra es un palíndromo 
(se lee igual al derecho y al revés). */
let texto = "aya"


function comparaPalindromo(palabra) {
    let invertido = ""
    for (let i = palabra.length -1 ; i >= 0 ; i--){
        invertido = invertido + palabra[i]
    }
    if(texto === invertido){
        console.log("La palabra ",texto , "es un palindromo", invertido);
    }
    else{
        console.log("La palabra ",texto, " no es un palíndromo"); 
    }
    return invertido
}
comparaPalindromo(texto)

