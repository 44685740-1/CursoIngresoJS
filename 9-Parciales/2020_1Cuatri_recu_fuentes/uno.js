/*
Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura
*/
function mostrar()
{
	//varibales
	let pais;
	let temperatura;
	let temperarutaMinima;
	let contadorTemperaturaPar;
	let cantidadDeHabitantes;
	let continente;
	let conatdorPaisesAmericaConMenos0Grados;
	let contador;
	let acumuladorHabitantesPais;
	let promedio;
	let flagTemperaturaMinimaPrimero;
	let paisTemperaturaMinima;
	let mensaje;

	//inicializar
	contador = 0;
	contadorTemperaturaPar = 0;
	conatdorPaisesAmericaConMenos0Grados = 0;
	acumuladorHabitantesPais = 0;
	flagTemperaturaMinimaPrimero = true;


	while(contador < 5){
		contador++;// cuenta las vueltas y los ingresos de paises por lo tanto sirve para calcular el promedio

		do{
			continente = prompt("ingrese el continente en el cual esta su pais").toLowerCase(continente);
		} while(continente != "america" && continente != "asia" && continente != "europa");

		do{
			pais = prompt("ingrese el nombre del pais").toLowerCase(pais);
		} while(isNaN(pais) == false);

		do{
			temperatura = prompt("ingrese la temperatura minima registrada");
			temperatura = parseInt(temperatura);
		} while(isNaN(temperatura) || temperatura <= -50 || temperatura >= 50);

		do{
			cantidadDeHabitantes = prompt("ingrese la cantidad de habitantes en millones");
			cantidadDeHabitantes = parseInt(cantidadDeHabitantes);
		} while(isNaN(cantidadDeHabitantes) || cantidadDeHabitantes < 1 || cantidadDeHabitantes > 2000);

		acumuladorHabitantesPais = acumuladorHabitantesPais + cantidadDeHabitantes;


		if(temperatura % 2 == 0){
			contadorTemperaturaPar++;
		}


		if(continente == "america" && temperatura < 0){
			conatdorPaisesAmericaConMenos0Grados++;
		}


		if(flagTemperaturaMinimaPrimero){
			temperarutaMinima = temperatura;
			paisTemperaturaMinima = pais;
			flagTemperaturaMinimaPrimero = false;
		} else{
			if(temperatura < temperarutaMinima){
				temperatura = temperarutaMinima;
				pais = paisTemperaturaMinima;
			}
		}
	}
	promedio = acumuladorHabitantesPais / contador;


	mensaje = `la cantidad de temperaturas par es de ${contadorTemperaturaPar} <br> la cantidad de paises de amercia con temperatura menor a cero grados es de ${conatdorPaisesAmericaConMenos0Grados} <br el promedio de habitantes de los paises ingresados es de ${promedio} <br> la temperatura minima ingresada fue de ${temperarutaMinima} y fue el pais de ${paisTemperaturaMinima}`;
	//falta el b)
	document.write(mensaje);

}
