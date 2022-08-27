function mostrar()
{
	let hora;
	let mensaje;
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);
	//aca podria haber hecho una condicion dentro de un  solo case
	//pero para eso es mejor hacer un if directamente
	//no hay que usar logica condicional dentro de los case
	switch (hora) {
		case 7:
		case 8:
	    case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana.";
			break;
		default:
			mensaje = "seleccionaste una hora que no es de mañana";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN