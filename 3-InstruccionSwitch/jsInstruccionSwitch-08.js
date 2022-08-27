function mostrar()
{
	let destino;
	let mensaje;
	let frio;
	let calor;


	destino = document.getElementById("txtIdDestino").value;
	frio = "frio";
	calor = "calor";

	switch (destino) {
		case "Bariloche":
			mensaje = frio;
			break;
		case "Cataratas":
			mensaje = calor;
			break;
	    case "Mar del plata":
			mensaje = calor;
			break;
		case "Ushuaia":
			mensaje = frio;
			break;
	}
	//no uso el default porque estoy en un select
	alert(mensaje);
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = frio;
			break;
		case "Cataratas":
	    case "Mar del plata":
			mensaje = calor;
			break;
		
	}
}//FIN DE LA FUNCIÓN