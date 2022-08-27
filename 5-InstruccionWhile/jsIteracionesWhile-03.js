/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	while (clave != "utn750") {
		clave = prompt("ingrese la clave para ingresar");
		clave = clave.toLowerCase();//convierte lo que ingresa el usuario en minusculas
	}
	alert("pusdiste Ingresar muy bien");
	
}//FIN DE LA FUNCIÓN
