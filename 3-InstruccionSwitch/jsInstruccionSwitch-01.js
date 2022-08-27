/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;
	//el switch se usa para una condicon sobre una misma variable
	//rango que puede cambiar uso if
	//rango definido y que no cambia uso el switch
	switch (mes) {
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;
	    case "Diciembre":
			mensaje = "Felices fiesta!!!.";
			break;
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
			break;
		default:
			mensaje = "seleccionaste un mes sin mensaje"
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN