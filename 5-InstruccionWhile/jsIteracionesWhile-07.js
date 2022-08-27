/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let continuar;
	let promedio;

	continuar = true;
	contador = 0;
	acumulador = 0;
	
	while (continuar) {
		contador = contador + 1;
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		continuar = confirm("queres continuar???");
	}

	

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN