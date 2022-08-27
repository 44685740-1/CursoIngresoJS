function mostrar()
{
	let edad;
	let mensaje;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	// edad > 12 
	// edad < 18
	//condicion compuesta
	if (edad >= 13 && edad <= 17){
		mensaje = "es adolescente";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN