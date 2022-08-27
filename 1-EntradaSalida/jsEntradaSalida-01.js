/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
*/
function mostrar()
{
	/*
	//no hacer cuentas dentro del alert
	alert("Esto funciona de maravilla");
	*/

	//Ejercicos Barrilete clase sbados 1
	

	//varillas de plastico

	/*
	let diametroMayorAB;
	let diametroMenorDC;
	let ladosMenoresBDyBC;
	let ladosMayoresADyAC;
	let areaCometa;
	let cantPlatico;

	diametroMayorAB = prompt("ingrese la medidad de AB");
	diametroMayorAB = diametroMayorAB / 100;
	diametroMenorDC = prompt("ingrese la medida de DC");
	diametroMenorDC = diametroMenorDC / 100;
	ladosMenoresBDyBC = prompt("ingrese la medida de los lados menores BD y BC");
	ladosMenoresBDyBC = ladosMenoresBDyBC / 100;
	ladosMayoresADyAC = prompt("ingrese la medidad de los lados mayores AD y AC");
	ladosMayoresADyAC = ladosMayoresADyAC / 100;

	areaCometa = (diametroMayorAB * diametroMenorDC) / 2;

	cantPlatico = diametroMayorAB + diametroMenorDC + (ladosMenoresBDyBC * 2) + (ladosMayoresADyAC * 2);

	alert(`el area del cometa es ${areaCometa}`);

	alert(`se necesitas ${cantPlatico} metros de platico`);
	*/

	//ejercicio min max
	// pedir nombre apellido y edad y mostrar el nombre y apellido de la persona mas vieja

	let nombre;
	let apellido;
	let edad;
	let flagPrimero;
	let edadMinima;
	let nombreMasVieja;
	let apellidoMasVieja;
	let edadMaxima;
	let respuesta;
	let mensaje;

	respuesta = true;
	flagPrimero = true;
	//sin validar

	while(respuesta){
		nombre = prompt("ingres su nombre");
		apellido = prompt("Ingrese su apellido");
		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
		//si es la primer entrada de datos
		if(flagPrimero){
			apellidoMasVieja = apellido;
			nombreMasVieja = nombre;
			edadMaxima = edad;
			edadMinima = edad;
			flagPrimero = false;
		} else{
			if(edadMaxima<edad){
				edadMaxima = edad;
				nombreMasVieja = nombre;
				apellidoMasVieja = apellido;
			}
			if(edadMinima>edad){
				edadMinima = edad;
			}
		}
		respuesta = confirm("queres continuar?");
	}
	mensaje = `la persona mas vieja es ${nombre} ${apellido} con una edad de ${edad}`;
	alert(mensaje);
}

