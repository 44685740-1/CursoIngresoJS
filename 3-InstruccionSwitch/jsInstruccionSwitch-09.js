function mostrar()
{
	let estacion;
	let destino;
	let mensaje;
	let precioFinal;
	let aumentoODescuento;
	let precioBase;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precioBase = 15000;
	/*
	switch (estacion) {
		case "Invierno":
			if(destino == "Bariloche"){
				//aumento del 20%
				aumentoODescuento = 1.2;
			} else{
				if(destino == "Cataratas" || destino == "Cordoba"){
					//descuento del 10%
					aumentoODescuento = 0.9;
				} else {
					//descuento del 20%
					aumentoODescuento = 0.8;
				}
			}
			break;
		case "Verano":
			if(destino == "Bariloche"){
				//descuento del 20%
				aumentoODescuento = 0.8;
				if(destino == "Cataratas" || destino == "Cordoba"){
					//aumento del 10%
					aumentoODescuento = 1.1;
				} else {
					//aumento del 20%
					aumentoODescuento = 1.2;
				}
			}
			break;
	    case "Otoño":
		case "Primavera":
			if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata" ){
				//aumento del 10%
				aumentoODescuento = 1.1;
			} else{
				//sin descuento
				aumentoODescuento = 1
			}
			break;
		default:
			mensaje = "ERROR"
	}
	*/
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					aumentoODescuento = 1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					aumentoODescuento = 0.9;
					break;
				default:
					aumentoODescuento = 0.8;
					break;
			}
		break;
		case "Verano":
			switch(destino){
				case "Bariloche":
				aumentoODescuento = 0.8;
				break;
				case "Cataratas":
				case "Cordoba":
					aumentoODescuento = 1.1;
					break;
				default:
					aumentoODescuento = 1.2;
					break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumentoODescuento = 1.1;
				break;
				default:
					aumentoODescuento = 1
				break;
			}
		break;
	}




	precioFinal = precioBase * aumentoODescuento;
	mensaje = `el precio final es ${precioFinal}`;
	alert(mensaje);

}//FIN DE LA FUNCIÓN