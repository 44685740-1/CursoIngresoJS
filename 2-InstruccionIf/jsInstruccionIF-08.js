function mostrar()
{
	let edad;
	let estadoCivil;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	/*
	
	//mal programado porque hay un if que no hace nada
	if (edad < 18 && estadoCivil != "Soltero"){
		//no hago nada
	} else if (edad > 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor.")
	}
	*/

	if(edad > 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor.")
	}


}//FIN DE LA FUNCIÓN