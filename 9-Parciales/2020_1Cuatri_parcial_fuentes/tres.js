/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	//variables
	let nombre;
	let nombreTemperaturaMax;
	let edad;
	let genero;
	let estadoCivil;
	let temperatura;
	let temperaturaMax;
	let respuesta;
	let contadorSolteroOViudo;
	let conatdorMayorDeEdadViudo;
	let contadorTerceraEdad;
	let promedioEdadSolteros;
	let conatadorSolteros;
	let acumuladorEdadSolteros;
	let flagPrimero;
	let mensaje;

	//inicializar
	respuesta = true;
	contadorSolteroOViudo = 0;
	conatdorMayorDeEdad = 0;
	contadorTerceraEdad = 0;
	acumuladorEdadSolteros = 0;
	conatadorSolteros = 0;
	conatdorMayorDeEdadViudo = 0;
	flagPrimero = true;


	while(respuesta){

		do{
			nombre = prompt("ingrese su nombre");
		} while(isNaN(nombre) == false);

		do{
			genero = prompt("ingrese su genero f/m").toLowerCase(genero);
		} while(isNaN(genero) == false || genero != "f" && genero != "m");

		do{
			edad = prompt("ingrese su edad");
			edad = parseInt(edad)
		} while(isNaN(edad));

		do{
			estadoCivil = prompt("ingrese su estado civil soltero, casado o viudo");
		} while( estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do{
			temperatura = prompt("ingrese su temperatura corporal");
			temperatura = parseInt(temperatura);
		} while(isNaN(temperatura));

		if(edad >= 18 && estadoCivil == "viudo"){
			conatdorMayorDeEdadViudo++;
		}

		if(genero == "m" && (estadoCivil == "soltero" |estadoCivil == "viudo")){
			contadorSolteroOViudo++;
		}

		if(edad > 60 && estadoCivil == "viudo"){
			contadorTerceraEdad++;
		}

		if(genero == "m" && estadoCivil == "soltero"){
			conatadorSolteros++;
			acumuladorEdadSolteros = acumuladorEdadSolteros + edad;
		}

		if(flagPrimero){
			temperaturaMax = temperatura;
			nombreTemperaturaMax = nombre;
			flagPrimero = false;
		} else {
			if(temperatura > temperaturaMax){//maximo
				temperaturaMax = temperatura;
				nombreTemperaturaMax = nombre;
			}
		}

		respuesta = confirm("¿desea continuar?");
	}
	promedioEdadSolteros = acumuladorEdadSolteros / conatadorSolteros;

	mensaje = `el nombre de la persona con mas tenperatura es ${nombreTemperaturaMax} con una temperatura de ${temperaturaMax} <br> hay ${conatdorMayorDeEdadViudo} <br> hay ${contadorSolteroOViudo} hombres solteros o viudos <br> hay ${contadorTerceraEdad} personas de la tercera edad que son viudos <br> el promedio de edad de los hombres solteros es de ${promedioEdadSolteros}`;

	document.write(mensaje);

}
