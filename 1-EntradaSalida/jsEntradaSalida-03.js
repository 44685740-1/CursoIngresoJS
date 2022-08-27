/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/*
Simulacro Sabados
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

/*
VERSION NINJA
se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, primavera)


i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado
*/
function mostrar()
{
	/*
	let dato = document.getElementById("txtIdNombre").value;
	alert(dato);
	*/

	//varibales
	let nombre;
	let genero;
	let nota;
	let edad;
	let respuesta;
	let acumuladorNotasTotales;
	let contadorNotasTotales;
	let promedioNotasTotales;
	let flagPrimeroNotaMasBaja;
	let nombreNotasMasBaja;
	let notaMasBaja;
	let generoNotaMasBaja;
	let contadorVaronesNotaSeis;
	let flagPrimeroMujer;
	let nombrePrimerMujer;
	let notaPrimerMujer;
	let contadorAprobadosMujer;
	let contadorAprobadosHombres;
	let conatadorMujeres;
	let acumuladorNotasMujeres;
	let contadorAprobados;
	let acumuladorNotaAprobados;
	let promedioAprobados;
	let promedioNotasMujeres;
	let conatdorMujeresDesaprobadas;
	let contadorHombresDesaprobados;
	let generoMasDesaprobados;
	let mensaje;
	let flagPrimeroPeronaMasAlta;
	let nombrePersonaMasAlta;
	let notaPersonaMasAlta;
	let flagPrimerVaronOtoño;
	let primerVaronOtoño;
	let flagAdolescenteMenorAltura;
	let nombreMenorAlturaAdolescente;
	let menorAlturaAdolescente;
	let conatdorInvierno;
	let conatadorVerano;
	let conatdorPrimavera;
	let conatdorOtoño;
	let estacionDelAñoConMasAlumnos;
	let flagPrimerAprobado;
	let edadPrimerAprobado;
	let generoPrimerAprobado;
	let alturaPrimerAprobado;
	let nombrePrimerAprobado;
	let generoMasDesapronado;

	

	//inicializar
	respuesta = true;
	flagPrimeroNotaMasBaja = true;
	flagPrimeroPeronaMasAlta = true;
	flagPrimerVaronOtoño = true;
	flagAdolescenteMenorAltura = true;
	flagPrimerAprobado = true;
	acumuladorNotasTotales = 0;
	contadorNotasTotales = 0;
	contadorVaronesNotaSeis = 0;
	acumuladorNotasMujeres = 0;
	conatadorMujeres = 0;
	contadorAprobados = 0;
	acumuladorNotaAprobados = 0;
	conatdorMujeresDesaprobadas = 0;
	contadorHombresDesaprobados = 0;
	conatdorOtoño = 0;
	conatdorPrimavera = 0;
	conatadorVerano = 0;
	conatdorInvierno = 0;

	while(respuesta){

		do{
			nombre = prompt("ingrese su nombre").toLowerCase(nombre);
		} while(isNaN(nombre) == false);

		do{
			genero = prompt("ingrese su genero f/m").toLowerCase(genero);
		} while(isNaN(genero) == false || genero != "f" && genero != "m");


		do{
			nota = prompt("ingrese su nota");
			nota = parseInt(nota);
		} while(isNaN(nota) || nota < 1 || nota > 10);

		do{
			edad = prompt("ingrese su edad");
			edad = parseInt(edad)
		} while(isNaN(edad));

		do{
			altura = prompt("ingrese su edad");
			altura = parseInt(edad)
		} while(isNaN(altura) || altura < 0);

		
		do{
        	estacionDelAño = prompt("ingres el tipo de producto arena, cal o cemento").toLowerCase(estacionDelAño);
      	} while(estacionDelAño != "otoño" && estacionDelAño != "verano" && estacionDelAño != "primavera" && estacionDelAño != "invierno");


		contadorNotasTotales++;
		acumuladorNotasTotales = acumuladorNotasTotales + nota;

		if(flagPrimeroNotaMasBaja){
			nombreNotasMasBaja = nombre;
			nombreNotasMasBaja = nota;
			generoNotaMasBaja = genero;
			flagPrimeroNotaMasBaja = false;
		} else{
			if(nota < notaMasBaja){
				nota = notaMasBaja;
				nombre = nombreNotasMasBaja;
				genero = generoNotaMasBaja;
			}
		}

		if(genero == "m" && nota >= 6){
			contadorVaronesNotaSeis++;
		}

		if(flagPrimeroMujer && genero == "f"){
			notaPrimerMujer = nota;
			nombrePrimerMujer = nombre;
		}

		if(nota >= 6 && genero == "m"){
			contadorAprobadosHombres++;
		} else{
			if(nota >= 6 && genero == "f"){
				contadorAprobadosMujer++;
			}
		}

		if(genero == "f"){
			conatadorMujeres++;
			acumuladorNotasMujeres = acumuladorNotasMujeres + nota;
		}

		if(nota >= 6){
			contadorAprobados++;
			acumuladorNotaAprobados = acumuladorNotaAprobados + nota;
		}

		if(nota >= 6){
			if(genero == "m"){
				contadorAprobadosHombres++;
			} else{
				if(genero == "f"){
					contadorAprobadosMujer++;
				}
			}
		}


		if(flagPrimeroPeronaMasAlta){
			nombrePersonaMasAlta = nombre;
			notaPersonaMasAlta = nota;
			flagPrimeroPeronaMasAlta == false;
		} else{
			if(nota > notaPersonaMasAlta){
				nota = notaPersonaMasAlta;
				nombre = nombrePersonaMasAlta;
			}
		}

		if(flagPrimerVaronOtoño && estacionDelAño == "otoño"){
			primerVaronOtoño = nombre;
			flagPrimerVaronOtoño == false;
		}

		if(edad <= 18 && edad <= 13){
			if(flagAdolescenteMenorAltura){
				nombreMenorAlturaAdolescente = nombre;
				menorAlturaAdolescente = altura;
			} else{
				if(altura < menorAlturaAdolescente){
					altura = menorAlturaAdolescente;
					nombre = nombreMenorAlturaAdolescente;
				}
			}
		} else


		switch(estacionDelAño){
			case "invierno":
				conatdorInvierno++;
				break;
			case "verano":
				conatadorVerano++;
				break;
			case "otoño":
				conatdorOtoño++;
				break;
			case "primavera":
				conatdorPrimavera++;
				break;
		}


		if(nota >= 6){
			if(flagPrimerAprobado){
				nombrePrimerAprobado = nombre;
				edadPrimerAprobado = edad;
				generoPrimerAprobado = genero;
				alturaPrimerAprobado = altura;
				flagPrimerAprobado = false;
			}
		}
		respuesta = confirm("¿desea continuar?");
	}

	if(contadorNotasTotales > 0){
		promedioNotasTotales = acumuladorNotasTotales / contadorNotasTotales;
	}
	
	if(contadorAprobados > 0){
		promedioAprobados = acumuladorNotaAprobados / contadorAprobados;
	}
	
	if(conatadorMujeres > 0){
		promedioNotasMujeres = acumuladorNotasMujeres / conatadorMujeres;
	}
	

	if(conatadorVerano > conatdorInvierno && conatadorVerano > conatdorOtoño && conatadorVerano > conatdorPrimavera){
		estacionDelAñoConMasAlumnos = `verano con ${conatadorVerano} alumnos`;
	} else{
		if(conatdorInvierno > conatadorVerano && conatdorInvierno > conatdorOtoño && conatdorInvierno > conatdorPrimavera){
			estacionDelAñoConMasAlumnos = `invierno con ${conatdorInvierno} alumnos`;
		} else{
			if(conatdorPrimavera > conatadorVerano && conatdorPrimavera > conatdorInvierno && conatdorPrimavera > conatdorOtoño){
				estacionDelAñoConMasAlumnos = `primavera con ${conatdorPrimavera} alumnos`;
			} else{
				//si o si es otoño el que tiene mas
				estacionDelAñoConMasAlumnos = `otoño con ${conatdorOtoño}} alumnos`;
			}
		}
	}

	if(conatdorMujeresDesaprobadas > contadorHombresDesaprobados){
		generoMasDesaprobados = `femenino con ${conatdorMujeresDesaprobadas}`;
	} else{
		generoMasDesaprobados = `masculino con ${contadorHombresDesaprobados}`;
	}

	mensaje += `el promedio de las notas totales es de ${promedioNotasTotales} <br>`;
	mensaje += `la nota mas baja fue ${notaMasBaja} y fue de ${nombreNotasMasBaja} y su genero es ${generoNotaMasBaja} <br>`;
	mensaje += `hay ${contadorVaronesNotaSeis} con nota mayor a 6 <br>`;
	mensaje += `la primer mujer ingresada fue ${nombrePrimerMujer} con una nota de ${notaPrimerMujer} <br>`;
	mensaje += `hay ${contadorAprobadosMujer} mujeres aprobadas y ${contadorAprobadosHombres} aponados hombres <br>`;
	mensaje += `${generoMasDesaprobados}<br>`;
	mensaje += `el promedio de los aprobados es ${promedioAprobados} <br>`;
	mensaje += `el promedio de las mujeres es de ${promedioNotasMujeres} <br>`;
	mensaje += `el nombre de la persona mas alta es ${nombrePersonaMasAlta} y la nota es ${notaPersonaMasAlta} <br>`;
	mensaje += `el nombre del primer varon nacido en otoño ${primerVaronOtoño} <br>`;
	mensaje += `el nombre del adolescente con altura mas baja es ${nombreMenorAlturaAdolescente} con altura de ${menorAlturaAdolescente} <br>`;
	mensaje += `la estacion del año en la que nacieron mas alumnos es ${estacionDelAñoConMasAlumnos}`;
	mensaje += `el primer aprobado es ${nombrePrimerAprobado}, su genero es ${generoPrimerAprobado}, su edad es ${edadPrimerAprobado} y su altura es de ${alturaPrimerAprobado} <br>`

	document.write(mensaje);
}


