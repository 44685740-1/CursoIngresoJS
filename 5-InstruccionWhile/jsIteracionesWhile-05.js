/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let genero;
	genero = prompt("ingrese f para femenino y m para masculino");
	genero = genero.toLowerCase();
	
	while (genero != "f" && genero != "m") {
		genero = prompt("ingrese f para femenino y m para masculino");
		genero = genero.toLowerCase();
		document.getElementById("txtIdSexo").value = genero;
	}
	alert("ingresate bien el genero");

	/*
	while (!(genero == "m" || genero == "f")) {
		genero = prompt("ingrese f para femenino y m para masculino");
		genero = genero.toLowerCase();
		document.getElementById("txtIdSexo").value = genero;
	}
	*/


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN