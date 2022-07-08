/* 
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar()
{
    let precio;
    let descuentoPorcentaje;
    let precioFinal;
    precio = prompt("ingrese el precio");
    precio = parseInt(precio);
    descuentoPorcentaje = prompt("ingrese el porcentaje de descuento");
    descuentoPorcentaje = parseInt(descuentoPorcentaje);
    //hay que mejorar la forma en la que saco el descuento, mejorar usar la tipica regla de tres
    //se podria tambien hacer una variable donde se multiplica el porcentaje * el precio
    //y luego restar esa variable al precio
    //asi quedaria mas prolijo
    precioFinal = (precio - (precio * (descuentoPorcentaje/100)));

    document.getElementById("elPrecioFinal").value = precioFinal;
}
