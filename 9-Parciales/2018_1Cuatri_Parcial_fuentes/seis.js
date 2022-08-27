/*
2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.
*/
function mostrar()
{
    //variables
    let nombre;
    let genero;
    let edad;
    let prokemon;
    let promedioEdad;
    let respuesta;
    let acumuladorEdad;
    let contador;//cuanta vueltas y personas que ingresan
    let nombreMasViejo;
    let nombreMasJoven;
    let pokemonMasViejo;
    let pokemonMasJoven;
    let edadMasViejo;
    let edadMasJoven;
    let flagPrimero;
    let mensaje;
    

    //inicializar
    respuesta = true;
    acumuladorEdad = 0;
    contador = 0;
    flagPrimero = true;

    while(respuesta){
        contador++;
        do{
			nombre = prompt("ingrese su nombre");
		} while(isNaN(nombre) == false);

        do{
			genero = prompt("ingrese su genero f/m/x").toLowerCase(genero);
		} while(isNaN(genero) == false || genero != "f" && genero != "m" && genero != "x");

        do{
			edad = prompt("ingrese su edad");
			edad = parseInt(edad)
		} while(isNaN(edad) || edad < 3 || edad > 99);

        acumuladorEdad = acumuladorEdad + edad;

        do{
            prokemon = prompt("ingres el su pokemon Charmander, Squirtle o Bolbasaur").toLowerCase(prokemon);
        } while(prokemon != "charmander" && prokemon != "squirtle" && prokemon != "bolbasur");


        if(flagPrimero){
            nombreMasViejo = nombre;
            pokemonMasViejo = prokemon;
            nombreMasJoven = nombre;
            pokemonMasJoven = prokemon;
            edadMasJoven = edad;
            edadMasViejo = edad;
        } else{
            if(edad > edadMasViejo){
                edad = edadMasViejo;
                nombre = nombreMasViejo;
                prokemon = pokemonMasViejo;
            }

            if(edad < edadMasJoven){
                edad = edadMasJoven;
                nombre = nombreMasJoven;
                prokemon = pokemonMasJoven;
            }
        }
        respuesta = confirm("¿desea Continuar?");
    }

    if(acumuladorEdad > 0){
        promedioEdad = acumuladorEdad / contador;
    }

    mensaje = `el promedio de edad de los ingresadosa es de ${promedioEdad} <br>`;
    mensaje += `la persona mas vieja es ${nombreMasViejo}, su pokemon es ${pokemonMasViejo} con una edad de ${edadMasViejo} <br>`;
    mensaje += `la persona mas joven es ${nombreMasJoven}, su pokemon es ${pokemonMasJoven} con una edad de ${edadMasJoven}`;

    document.write(mensaje);

}
