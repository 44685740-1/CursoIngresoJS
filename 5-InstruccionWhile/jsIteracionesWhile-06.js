function mostrar()
{
	let numeroIngresado;
	let contador;
	let acumulador;
	let promedio;
	//esto se puede hacer con do while y de esa forma no repetimos codigo dentro y fuera del loop
	contador = 0;
	acumulador = 0;
	numeroIngresado = prompt("ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	while (contador < 5) {
		contador = contador + 1;
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN