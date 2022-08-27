function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	//edad > 17
	// edad > 12 && edad < 18
	if (edad >= 18){
		alert("Es mayor de edad");
	} else if(edad >= 13 && edad <= 17){
		alert("Es adolescente");
	} else{
		alert("es niño");
	}


	//fotma correcta de hacerlo
	//tambien hay que reasignar la variable mensaje en cada if
	//y solo mostras en el alert fuera del if con un alert
	
	if(edad > 17){
		alert("Es mayor de edad");
	} else{
		alert("Es adolescente");
		if(edad < 13){
			alert("es niño");
		}
	}


}//FIN DE LA FUNCIÓN