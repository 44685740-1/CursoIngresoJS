function mostrar()
{
	//usar los operadores >= y <= bajan la performance
	//debido a que hace una doble evaluacion 
	//Es mejor solo usar < y > y restarle -1 a la varible o cumar +1
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if (edad == 15){
		alert("niña bonita");
	} else{
		alert("no hace nada");
	}
}//FIN DE LA FUNCIÓN