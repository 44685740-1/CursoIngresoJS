/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let continuar;
	let SumaPositivos
	let multiplicacionNegativos;
	let numeroIngresado;
	let contador;

	SumaPositivos = 0;
	multiplicacionNegativos = 1;

	continuar = true;

	while (continuar) {
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		continuar = confirm("desea continuar: ");
		if(numeroIngresado >= 0){
			SumaPositivos = SumaPositivos + numeroIngresado;
		} else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
	}
	//en el caso de que no se ingresaron numeros negativos
	if(multiplicacionNegativos == 1){
		multiplicacionNegativos = "no se ingresaron numeros negativos";
	}
	document.getElementById("txtIdSuma").value = SumaPositivos;

	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}//FIN DE LA FUNCIÓN