/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = prompt("ingrese un numero entre 0 y 9 inclusive");
	while (!(numero >= 0 && numero <= 9)) {
		numero = prompt("ingrese un numero entre 0 y 9 inclusive");
		document.getElementById("txtIdNumero").value = numero;
	}
	alert("QUE TE DIJE");

	/*
	while (numero < 0 || numero >9) {
		numero = prompt("ingrese un numero entre 0 y 9 inclusive");
		document.getElementById("txtIdNumero").value = numero;
	}
	*/
}//FIN DE LA FUNCIÓN