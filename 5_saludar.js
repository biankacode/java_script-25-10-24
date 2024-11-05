/* 2. Saludar varias veces
Si necesitas mostrar un mensaje como "¡Hola!" cinco veces:
En un ciclo for le dices al programa: Empieza desde 1, termina en 5, y escribe “¡Hola!” cada vez. 
Esto es útil para ver la repetición en acción y entender que el ciclo se ejecuta varias veces con
solo una línea de instrucción.*/

function saludar(nombre) {
  
    for (let i = 0; i < 5; i++){
        console.log("Hola", nombre);
    }
    return nombre
 
}
    saludar("pedro") 


