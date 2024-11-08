/* Calcular el dedescuento de un articulo */
function calcularDescuento(precio, descuentoPorcentaje) {
    let descuento = (precio * descuentoPorcentaje ) / 100
    const precioMenosDecuento = precio - descuento

    return precioMenosDecuento
}
const precoOriginal = 199
const descuentoPorcentaje = 30
const precioFinal = ( calcularDescuento(precoOriginal,descuentoPorcentaje));


console.log("precio original:", precoOriginal);
console.log("decuento:", descuentoPorcentaje, "%");
console.log("El precio ya con su descuento:",precioFinal);


