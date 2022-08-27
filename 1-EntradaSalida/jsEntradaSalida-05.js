/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre = document.getElementById("txtIdNombre").value;

	let edad = document.getElementById("txtIdEdad").value;
	//el alert solo debe ser usado para mostrar el mensaje por lo sual es mejor
	//hacer una variable y mostrarla en el alert

	alert("usted se llama " + nombre + " y tiene "  + edad + " años")

	alert(`usted se llama ${nombre} y tiene ${edad} años`) //string interpulado
}

