function mostrar()
{
	let destino;
	let mensaje;
	let puntoCardinal;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			puntoCardinal = "sur";
			mensaje = puntoCardinal;
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			mensaje = puntoCardinal;
			break;
	   case "Mar del plata":
			puntoCardinal = "este";
			mensaje = puntoCardinal;
			break;
		case "Ushuaia":
			puntoCardinal = "Sur"
			mensaje = puntoCardinal;
			break;
	}
	//no uso el default porque estoy en un select

	alert(mensaje);
}//FIN DE LA FUNCIÓN