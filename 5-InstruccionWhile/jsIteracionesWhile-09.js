/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	/*
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let flagPrimero;
	//banderas
	respuesta = true;
	flagPrimero = true;

	while(respuesta){
		do{
			numeroIngresado = prompt("ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		} while(isNaN(numeroIngresado) || numeroIngresado < 0);// es isNaN se lee como es verdad que variable no es unnumero

		if(flagPrimero){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flagPrimero = false;
		} else{
			if(numeroMaximo < numeroIngresado){
				numeroMaximo = numeroIngresado
			}

			if(numeroMinimo > numeroIngresado){
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta = confirm("desea continuar");
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;

	document.getElementById("txtIdMinimo").value = numeroMinimo;
	*/

	//Mismo ejercicio de maximo y minimo pero nos dicen que el usuario va a ingresar 3 numeros
	//entonces ya sabemos qeu usamos for
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let i;
	let contador;
	contador = 0;
	//si usas for usas la i como bandera
	//solo usas for si sabes el numero de iteraciones
	for(i = 0; i < 3; i++){
		contador++;
		console.log(contador);
		do{
			numeroIngresado = prompt("ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		} while(isNaN(numeroIngresado) || numeroIngresado < 0);// es isNaN se lee como es verdad que variable no es unnumero

		if(i == 0){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		} else{

			if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado;
			}

			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}

		document.getElementById("txtIdMaximo").value = numeroMaximo;

		document.getElementById("txtIdMinimo").value = numeroMinimo;


	}

}//FIN DE LA FUNCIÓN