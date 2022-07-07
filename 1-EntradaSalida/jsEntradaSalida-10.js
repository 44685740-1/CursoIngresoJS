/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	importe = document.getElementById("txtIdImporte").value;
	//con esto traigo
	importe = parseInt(importe);
	importeDescuento = importe - (importe * 0.25);
	document.getElementById("txtIdResultado").value = importeDescuento; 
	//con esto llevo

}
