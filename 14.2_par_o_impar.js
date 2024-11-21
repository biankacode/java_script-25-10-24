/* 2. Número par o impar: Crea una función que verifique si un número es par o impar, 
devolviendo un mensaje correspondiente. */


let num = 6
function par0impar(numero) {
    let resultado = numero % 2
    if (resultado === 0 ) {
        console.log(`El numero ${numero} es par`);
    } else{
        console.log(numero," No es par");
        
    }
    return resultado
}
par0impar(num)
