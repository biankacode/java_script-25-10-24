/* Determina si un número es menor o igual a otro. */

function numeroMenor(a,b) {
    if (a < b) {
        console.log(a , " menor a  ", b);  
    }else if ( b < a){
        console.log(b , " menor a  ", a);   
    } else{  
        console.log(a , " y ", b , " son iguales");
        
    }
}
numeroMenor(5,5)