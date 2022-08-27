function mostrar()
{
	let numIngresado;
	numIngresado = prompt("ingrese un numero");
	numIngresado = parseInt(numIngresado);
	for(numIngresado; numIngresado != 9;){
		numIngresado = prompt("ingrese un numero");
		numIngresado = parseInt(numIngresado);
		console.log(numIngresado);
		if(numIngresado == 9){
			break;
		}
	}
	alert("saliste ingresaste el 9");
}//FIN DE LA FUNCIÓN