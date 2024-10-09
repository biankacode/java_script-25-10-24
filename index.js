console.log("si sirve/*  */");
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

