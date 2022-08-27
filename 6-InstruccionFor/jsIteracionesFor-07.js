function mostrar()
{
	let numIngresado;
	let contadorDivisior;
	let contador;
	contadorDivisior = 0;
	contador= 0;
	numIngresado = prompt("ingrese un numero");
	numIngresado = parseInt(numIngresado);

	for(numIngresado; numIngresado > 1; numIngresado--){
		contador++;
		if(numIngresado % (numIngresado + contador) == 0){
			contadorDivisior++;
		}

	}
	alert(contadorDivisior);



}//FIN DE LA FUNCIÓN