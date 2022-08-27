function mostrar()
{
	let estacion;
	let destino;
	let mensaje;
	let siViaja;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	siViaja = "se viaja";
	noviaja = "nsiViaja"

	/*
	switch (estacion) {
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = siViaja;
			} else {
				mensaje = "no se viaja";
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = siViaja;
			} else{
				mensaje = "no se viaja";
			}
			break;
	   case "Otoño":
			mensaje = siViaja;
			break;
		case "Primavera":
			if(destino == "Bariloche"){
				mensaje = "no se viaja";
			} else {
				mensaje = siViaja;
			}
			break;
		default:
			mensaje = "ERROR";
	}
	*/

	//aca la diferencia es que uso el default para el otoño en vez de indicar si es invalido
	//ademas como es un select el usuario no se puede equivocar
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
					break;
			}
		break;
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
				mensaje = "se viaja";
				break;
				default:
				mensaje = "no se viaja";
				break;
			}
		break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
					mensaje = "no se viaja";
					break;
				default:
					mensaje = "si se viaja";
					break;
			}
		break;
		default:
			mensaje = "se viaja";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN