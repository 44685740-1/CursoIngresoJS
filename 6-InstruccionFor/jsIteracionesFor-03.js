function mostrar()
{
	let numeroRepeticiones;
	let mensaje;
	numeroRepeticiones = prompt("ingrese la cantidad de repeticiones");
	numeroRepeticiones = parseInt(numeroRepeticiones);
	mensaje = "Hola UTN fra";

	for(numeroRepeticiones;numeroRepeticiones > 0 ;numeroRepeticiones--){
		console.log(numeroRepeticiones);
		console.log(mensaje);
		document.write(mensaje);
	}
}//FIN DE LA FUNCIÓN