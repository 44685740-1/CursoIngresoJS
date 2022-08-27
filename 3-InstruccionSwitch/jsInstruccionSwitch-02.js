/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	//hago agrupaciones de case
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;
	//los meses comn el mensaje de fakta para el invierno podrian ir en el default
	//pero yo lo use para decir si es invalido el mes ingresado
	switch (mes) {
		case "Enero":
		case "Febrero":
	    case "Marzo":
		case "Abril":
		case "Mayo":
			mensaje = "Falta para el invierno."
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio."
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!."
			break;
		default:
			mensaje = "ingrese un mes valido";
	}
	alert(mensaje);
	




}//FIN DE LA FUNCIÓN