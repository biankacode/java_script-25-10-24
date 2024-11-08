/* 1. Sumar los números pares entre dos valores
Pide al usuario dos números: uno inicial y otro final.
Usa un ciclo para sumar todos los números pares entre esos dos valores. */
suma = 0
function sumarNumeros(numInicial, numFinal){
   
    for(let i = numInicial; i <= numFinal; i++ ){
        /* console.log(i,"lista de numeros"); */
         if (i % 2 === 0) {
            suma = suma + i;
         }
    }  
   return suma
}
console.log(sumarNumeros(1,8));

