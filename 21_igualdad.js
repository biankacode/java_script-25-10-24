/* Título: ¡Detectives de la Igualdad! 🕵️‍♀️🕵️‍♂️
Descripción: Crea una función que reciba dos valores como argumentos (por ejemplo, "a" y "b"). La función debe devolver "true" si ambos valores son iguales en valor y tipo de dato. De lo contrario, debe devolver "false".
Requerimientos:
Familiaridad con los tipos de datos en JavaScript (números, cadenas de texto, booleanos).
Dominio del operador de igualdad estricta (===).
 */


function comparacion(a,b) {
    if (a === b ){
        console.log("true");
    } else{
        console.log("false");
        
    }
}
comparacion("el perro", "el perro")