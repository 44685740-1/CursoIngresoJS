/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*
	let importe;
	importe = document.getElementById("txtIdImporte").value;
	//con esto traigo
	importe = parseInt(importe);
	importeDescuento = importe - (importe * 0.25);
	document.getElementById("txtIdResultado").value = importeDescuento; 
	//con esto llevo
	*/
	//siempre hacer el parseint cuando le pedimos datos al usuario por prompt
	//Idem al 9 pero se pide el porcentaje por prompt
	let importeDescuento;
	let importe;
	importeDescuento = prompt("imgrese el porcentaje que debemos hacer el descuento")
	importeDescuento = parseInt(importeDescuento);
	importe = document.getElementById("txtIdImporte").value;
	//con esto traigo
	importe = parseInt(importe);
	importeDescuento = importe - (importe * (importeDescuento/100));
	document.getElementById("txtIdResultado").value = importeDescuento; 
	//con esto llevo

}
