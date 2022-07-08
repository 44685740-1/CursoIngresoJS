/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*
	let sueldo;
	sueldo = document.getElementById("txtIdSueldo").value;
	//con esto traigo
	sueldo = parseInt(sueldo);
	sueldoAumentado = sueldo + (sueldo * 0.1);
	document.getElementById("txtIdResultado").value = sueldoAumentado;
	//con esto llevo
	*/
	//Idem al 9 pero se pide el porcentaje por prompt
	//siempre hacer el parseint cuando le pedimos datos al usuario por prompt
	let sueldo;
	let porcentajeAumento;
	porcentajeAumento = prompt("ingrese el porentaje que debemos aumentar");
	porcentajeAumento = parseInt(porcentajeAumento);
	sueldo = document.getElementById("txtIdSueldo").value;
	//con esto traigo
	sueldo = parseInt(sueldo);
	sueldoAumentado = sueldo + (sueldo * (porcentajeAumento/100));
	document.getElementById("txtIdResultado").value = sueldoAumentado;
	//con esto llevo
}
