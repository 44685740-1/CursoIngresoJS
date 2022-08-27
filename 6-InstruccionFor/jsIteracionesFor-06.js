function mostrar()
{
	let numIngresado;
	let contadorEsPar;
	contadorEsPar = 0;
	numIngresado = prompt("ingrese un numero");
	numIngresado = parseInt(numIngresado);

	for(numIngresado; numIngresado > 1; numIngresado--){
		console.log(numIngresado);
		if(numIngresado % 2 == 0){
			contadorEsPar++;
		}
	}
	alert(contadorEsPar);
}//FIN DE LA FUNCIÓN