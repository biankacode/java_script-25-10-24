/* Imprimir una cuenta regresiva de 10 a 0
Crea un ciclo que empiece en 10 y termine en 0,
mostrando cada número en orden descendente. */

function cuentaRegresiva(num) {
    for(let i = num; i >= 0 ; i --){
        console.log(i);
    }
    return num
}
cuentaRegresiva(20)
