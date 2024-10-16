/* Ejercicio: Determinar si un número es primo */
const numeroJugador = parseInt(prompt("Elije un numero del 1 al 10"))
let residuo  = numeroJugador % 2;

if (residuo === 1) {
    console.log(`El numero que escojiste es ${numeroJugador}  por lo tanto es un numero primo`);
}
else if (numeroJugador === 2){
console.log(`El numero que escojiste es ${numeroJugador}  por lo tanto es un numero primo`);

}else{
    console.log(`El numero que escojiste no es primo:  ${numeroJugador} `);
}
/* Ejercicio: Contar números positivos y negativos */

/* prompt(): Solicita al usuario que ingrese una cadena de texto (en este caso, una lista de números separados por comas).
split(','): Divide la entrada por las comas, obteniendo un array de cadenas.
trim(): Elimina posibles espacios en blanco alrededor de los números.
map(num => parseInt(num)): Convierte cada cadena en un número entero. */
let numUsuario = prompt("Ingresa una lista de 10 numeros separados por comas") 

let listaNum = numUsuario.split(',').map(num => parseInt(num.trim()))
console.log(listaNum);

let numpositivos = []
let numnegativos = []

if (listaNum <= 0) {
    
}
for (numnegativos = 1; listaNum < 0 ; numnegativos++) {
 console.log(numnegativos);
 
 
}

/* Operadores de comparación */
/* 
*  ==  :igualdad valor 
*  === :igualdad valor y tipo de darto
*  !=  :valores diferentes 
*  !== :valores direrentes valor y tipo
*  <   :menor que 
*  >   :mayor que
*  <=  :menor o igual
*  >=  :mayor o igual
*/
const a = 10;
const b = 20; 
const c = "10";

a == b; /* false */
a === b; /* faslse */
a != b; /* true */
a <= b;/* false */


/* Operadores lógicos */

/* 
 &&  : si este valor Y este valor son esto entonces
 ||  : si este valor O este valor se cumplen
 !   : valor de negación
*/

a == b && a === c; /* false */ /*  */
a === b || a != b; /* si a es igual, igual O a es diferente*/  /* true */
!(a === b);        /* se valida primero lo de los parentesis,y si querenos 
                    cambiar el valor del resultado,si da true podemos cambiarlo a false */

                    
/* Estructuras de control : IF */


let nombre = "Diego"

if (nombre === "Diego" ) {  /* si esta condicion se cumple imprime */
    console.log("Hola Diego");
    
} else if (nombre === "Bianca"){/* si la condicion de arriba no se cumple */
    console.log("Hola Bianca");
    
} else{/* si ninguna de las dos se cumple */
    console.log("No te conozco");
}

