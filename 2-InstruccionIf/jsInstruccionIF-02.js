function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	//edad > 17
	if (edad >= 18){
		alert("es mayor de edad");
	}

}//FIN DE LA FUNCIÓN