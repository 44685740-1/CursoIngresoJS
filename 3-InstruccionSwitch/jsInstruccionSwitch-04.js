function mostrar()
{
	let mes;
	let mensaje;
	let dias31;
	let dias30;
	let dias28;
	let dias29;
	let anioBisiesto;


	dias28 = 28;
	dias30 = 30;
	dias31 = 31;
	dias29 = 29;
	mes = document.getElementById("txtIdMes").value;
	anioBisiesto = prompt("¿estamos en año bisiesto?")
	//aca tambien podria haber usado un default para los meses de 31 dias que son los que hay
	//mas cantidad
	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = `tiene ${dias31} dias`;
			break;
		case "Febrero":
			if(anioBisiesto == "si"){
				mensaje = `tiene ${dias29} dias`;
			} else {
				mensaje = `tiene ${dias28} dias`;
			}
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = `tiene ${dias30} dias`;
			break;
		default:
			mensaje = "ingrese un mes valido";
	}
	
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN