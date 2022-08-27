function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;
	//podria haber hecho un default para los meses de 30 o mas
	switch (mes) {
		case "Febrero":
			mensaje =  " Este mes no tiene más de 29 días."
			break;
		case "Enero":
	    case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje =  "Este mes tiene 30 o más días"
			break;
		default:
			mensaje = "ingrese un mes valido";
	}
	
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN