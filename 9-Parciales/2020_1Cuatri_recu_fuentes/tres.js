
/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
*/
function mostrar()
{
	//variables
	let tipoAnimal;
	let raza;
	let nombre;
	let edad;
	let contador;
	let flagPrimeroViejo;
	let mayorEdad;
	let nombreMayorEdad;
	let conatadorRazaGatosMestizo;
	let acunuladorEdadGatosMestizo;
	let conatadorRazaGatosSiames;
	let acunuladorEdadGatosSiames;
	let conatadorRazaGatosTurco;
	let acunuladorEdadGatosTurco;
	let promedio;
	let mensaje;
	let razaGatoConMasAnimales;

	//inicializar
	contador = 0;
	flagPrimeroViejo = true;
	conatadorRazaGatosMestizo = 0;
	acunuladorEdadGatosMestizo = 0;
	conatadorRazaGatosSiames = 0;
	acunuladorEdadGatosSiames = 0;
	acunuladorEdadGatosTurco = 0;
	conatadorRazaGatosTurco = 0;
	


	while(contador < 10){
		contador++;


		do{
			tipoAnimal = prompt("ingrese el tipo de animal perro gato u otro").toLowerCase(tipoAnimal);
		} while(tipoAnimal != "perro" && tipoAnimal != "gato" && tipoAnimal != "otros");

		if(tipoAnimal == "perro"){
			do{
				raza = prompt("ingrese la raza de su perro").toLowerCase(raza);
			}while(raza != "pastor" && raza != "toy" && raza != "callejero");

			do{
				edad = prompt("ingrese la edad de su perro");
				edad = parseInt(edad);
			} while(isNaN(edad) || edad < 1 || edad > 20);

			do{
				nombre = prompt("ingrese el nombre de su perro");
			} while(isNaN(nombre) == false);


			if(flagPrimeroViejo){
				mayorEdad = edad;
				nombreMayorEdad = nombre;
				flagPrimeroViejo = false
			} else{
				if(edad > mayorEdad){
					edad = mayorEdad;
					nombre = nombreMayorEdad;
				}
			}
		} else{
			if(tipoAnimal == "gato"){
				do{
					raza = prompt("ingrese la raza de su gato").toLowerCase(raza);
				} while(raza != "siames" && raza != "turco" && raza != "mestizo");

				do{
					edad = prompt("ingrese la edad de su gato");
					edad = parseInt(edad);
				} while(isNaN(edad) || edad < 1 || edad > 20);

				do{
					nombre = prompt("ingrese el nombre de su gato");
				} while(isNaN(nombre) == false);

				if(raza == "mestizo"){
					conatadorRazaGatosMestizo++;
					acunuladorEdadGatosMestizo = acunuladorEdadGatosMestizo + edad;
				} else{
					if(raza == "siames"){
						conatadorRazaGatosSiames++;
						acunuladorEdadGatosSiames = acunuladorEdadGatosSiames + edad;
					} else{
						// si o si es turco
						conatadorRazaGatosTurco++;
						acunuladorEdadGatosTurco = acunuladorEdadGatosTurco + edad;
					}
				}

				if(flagPrimeroViejo){
					mayorEdad = edad;
					nombreMayorEdad = nombre;
					flagPrimeroViejo = false
				} else{
					if(edad > mayorEdad){
						edad = mayorEdad;
						nombre = nombreMayorEdad;
					}
				}
			} else{
				// si  o si es otro
				do{
					raza = prompt("que raza es su otro").toLowerCase(raza);
				} while(isNaN(raza) == false);

				do{
					edad = prompt("ingrese la edad de su otro");
					edad = parseInt(edad);
				} while(isNaN(edad) || edad < 1 || edad > 100);

				do{
					nombre = prompt("ingrese el nombre de su otro");
				} while(isNaN(nombre) == false);

				if(flagPrimeroViejo){
					mayorEdad = edad;
					nombreMayorEdad = nombre;
					flagPrimeroViejo = false
				} else{
					if(edad > mayorEdad){
						edad = mayorEdad;
						nombre = nombreMayorEdad;
					}
				}
			}
		}
	}


	if(conatadorRazaGatosMestizo > conatadorRazaGatosSiames && conatadorRazaGatosMestizo > conatadorRazaGatosTurco){
		razaGatoConMasAnimales = "mestizo";
		promedio = acunuladorEdadGatosMestizo / conatadorRazaGatosMestizo;
	} else{
		if(conatadorRazaGatosSiames > conatadorRazaGatosMestizo && conatadorRazaGatosSiames > conatadorRazaGatosTurco){
			razaGatoConMasAnimales = "siames";
			promedio = acunuladorEdadGatosSiames / conatadorRazaGatosSiames;
		} else{
			// si o si es turco
			razaGatoConMasAnimales = "turco"
			promedio = acunuladorEdadGatosTurco / conatadorRazaGatosTurco;
		}
	}

	mensaje = `El perro mas viejo es ${nombreMayorEdad} <br> el gato de mayor edad es ${nombreMayorEdad} <br> el otro tipo de mayor  edad es ${nombreMayorEdad} <br> la raza de gatos que tiene mas animales es ${razaGatoConMasAnimales} <br> esta raza de gatos tiene un promedio de edad de ${promedio} `;

	document.write(mensaje);
}
