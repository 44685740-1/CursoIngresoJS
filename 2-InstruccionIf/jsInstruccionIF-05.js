function mostrar()
{
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	/*
	//mal programado hay un if quye no hace nada
	// edad > 12 
	// edad < 18
	if (edad >= 13 && edad <= 17){
		//stament vacio a proposito para hacer esta condicion
	} else{
		alert("NO es adolescente");
	}
	*/

	
	if( edad < 13 || edad > 17){ //negacion de que es adolescente !(edad > 12 && edad < 18)
		mensaje = "la persona no es adolescente";
	}
	alert(mensaje);


	//hecho con negacion
	/*
	if(!(edad > 12 && edad < 18)){ 
		mensaje = "la persona no es adolescente";
	}
	alert(mensaje);

	*/
	
}//FIN DE LA FUNCIÓN