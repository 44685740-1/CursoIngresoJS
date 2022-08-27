/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let genero;
	let estadoCivil;
	let sueldoBruto;
	let nacionalidad;


	edad = 0;
	genero = "u";
	estadoCivil = 5;
	sueldoBruto = 1;
	nacionalidad = "p";

	while ((!(edad >= 18 && edad <= 90))) {
		edad = prompt("ingrese su edad entre 18 y 90");
		edad = parseInt(edad); 
	}

	document.getElementById("txtIdEdad").value = edad;


	while (genero != "m" && genero != "f") {
		genero = prompt("ingrese su genero m/f").toLowerCase();
	}

	document.getElementById("txtIdSexo").value = genero;

	while ( estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil !=4) {
		estadoCivil = prompt("ingrese su estado civil 1,2,3 o 4");
		estadoCivil = parseInt(estadoCivil);
	}

	document.getElementById("txtIdEstadoCivil").value = estadoCivil;

	while (sueldoBruto < 80000) {
		sueldoBruto = prompt("ingrese su sueldo bruto");
		sueldoBruto= parseInt(sueldoBruto);
	}

	document.getElementById("txtIdSueldo").value = sueldoBruto;

	while (nacionalidad != "A" && nacionalidad !="E" && nacionalidad != "N"){
		nacionalidad = prompt("ingrese su nacionalidad, A,E,N").toUpperCase();
	}

	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
