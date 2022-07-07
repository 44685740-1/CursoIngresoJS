/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);
    suma = precio1 + precio2 + precio3;
    alert(`la suma es ${suma}`);
}
function Promedio () 
{
    //declarar la variabales al principio
	let precio1;
    let precio2;
    let precio3;
    let promedio;
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);
    suma = precio1 + precio2 + precio3;
    promedio = suma / 3;
    promedio = promedio.toFixed(1);
    //lo que hace el tofixed es cortar en el numero que le in dicas en los parentesis
    // se puede usar math.floor para reducir la cantidad de numeros despues de la coma  
    // sino se puiede usar tofixed(1) indica que es solo un decimal alert("precio final " + precioFinal.toFixed(1));
    alert(`el promedio de los precios es de ${promedio}`);

}
function PrecioFinal () 
{
    //declarar la variabales al principio
	let precio1;
    let precio2;
    let precio3;
    let precioMasIva;
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);
    suma = precio1 + precio2 + precio3;
    precioMasIva = suma * 1.21;
    precioMasIva = precioMasIva.toFixed(1);
    alert(`el precio mas el iva es de ${precioMasIva}`);
}