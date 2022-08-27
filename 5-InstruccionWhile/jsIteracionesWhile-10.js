/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let acumuladorNegativos;
	let acumuladorPositivos;
	let cantPositivos;
	let cantNegativos;
	let cantCeros;
	let cantPar;
	let promedioPositivos;
	let promedioNegativos;
	let continuar;
	let numeroIngresado;
	let diferenciaPyN;

	let mensajeSumaNegativos;
	let mensajeSumaPositivos;
	let mensajeCantPositivos;
	let mensajeCantNegativos;
	let mensajeCantCeros;
	let mensajeCantPar;
	let mensajePromedioPositivos;
	let mensajePromedionegativos;
	let mensajediferenciaPyN

	acumuladorNegativos = 0;
	acumuladorPositivos = 0;
	cantPositivos = 0;
	cantNegativos = 0;
	cantPar = 0;
	cantCeros = 0;
	continuar = true;
	
	do {
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		continuar = confirm("quiere continuar?");

		if(numeroIngresado == 0){
			cantCeros++;
		}

		if(numeroIngresado > 0){
			cantPositivos++;
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
		} else{
			cantNegativos++;
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		}

		if((numeroIngresado % 2 == 0)){
			cantPar++;
		}
	} while(continuar);

	promedioPositivos = acumuladorPositivos / cantPositivos;
	promedioNegativos = acumuladorNegativos / cantNegativos;
	diferenciaPyN = acumuladorPositivos - acumuladorNegativos;

	mensajeSumaNegativos = `la suma de los numeros negativos es de ${acumuladorNegativos}`;
	mensajeSumaPositivos = `la suma de los numeros positivos es de ${acumuladorPositivos}`;
	mensajeCantPositivos = `la cantidad de numeros positivos es de ${cantPositivos}`;
	mensajeCantNegativos = `la cantidad de numeros negativos es de ${cantNegativos}`;
	mensajeCantCeros = `la cantidad de veces que salio el cero fue de ${cantCeros}`;
	mensajeCantPar = `la cantidad de numeros pares fue de ${cantPar}`;
	mensajePromedioPositivos = `el promedio de los positivos es de ${promedioPositivos}`;
	mensajePromedionegativos =  `el promedio de los negativos es de ${promedioNegativos}`;
	mensajediferenciaPyN = `la diferencia entre los positivos y los negativos es de ${diferenciaPyN}`;

	document.write(mensajeSumaNegativos);
	document.write("<br>");
	document.write(mensajeSumaPositivos);
	document.write("<br>");
	document.write(mensajeCantPositivos);
	document.write("<br>");
	document.write(mensajeCantNegativos);
	document.write("<br>");
	document.write(mensajeCantCeros);
	document.write("<br>");
	document.write(mensajeCantPar);
	document.write("<br>");
	document.write(mensajePromedioPositivos);
	document.write("<br>");
	document.write(mensajePromedionegativos);
	document.write("<br>");
	document.write(mensajediferenciaPyN);
}//FIN DE LA FUNCIÓN