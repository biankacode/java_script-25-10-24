/* 2. Sumar números de un arreglo
Dado un arreglo de números, escribe una función que calcule 
y retorne la suma de todos sus elementos.*/

let numArray = [1,2,3,4,26]

for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i] + i;
    console.log(element, i, "i");
}

for(let j = numArray.length -1; j >= 0; j--){
    let residuo = numArray[j] - j;
    console.log(residuo);
}