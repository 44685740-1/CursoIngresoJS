function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let precioFinal;
    let cantidadDescontada;
    

    precio = prompt("ingrese el precio");
    precio = parseInt(precio);
    porcentajeDescuento = prompt("ingrese el porcentaje de descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);
    cantidadDescontada = precio * (porcentajeDescuento/100);
    precioFinal = precio - cantidadDescontada;
    
    document.getElementById("elPrecioFinal").value = precioFinal;
    
}
