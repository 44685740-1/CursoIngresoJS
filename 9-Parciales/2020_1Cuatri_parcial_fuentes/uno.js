/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	//variables
	let i;
	let tipoProducto;
	let precio;
	let precioAlcohol;
	let cantUnidades;
	let cantUnidadesAlcoholMasBarato;
	let fabricanteAlcohol;
	let fabricante;
	let flagAlcohol;
	let unidadesPorCompraAlcohol;
	let contadorCompraAlcohol;
	let unidadesPorCompraBarbijo;
	let contadorCompraBarbijo;
	let unidadesPorCompraJabon;
	let contadorCompraJabon;
	let tipoUnidades;
	let promedio;
	let mensaje;
	let contador;



	//inicializar
	
	flagAlcohol = true;
	contador = 0;
	unidadesPorCompraAlcohol = 0;
	contadorCompraAlcohol = 0;
	unidadesPorCompraBarbijo = 0;
	contadorCompraBarbijo = 0;
	unidadesPorCompraJabon = 0;
	contadorCompraJabon = 0;

	while(contador < 1){
		contador++;

		do{
			tipoProducto =  prompt("ingrese el tipo de producto barbijo, jabon, alcohol").toLowerCase(tipoProducto);
		} while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do{
			precio = prompt("ingrese el precio del producto");
			precio = parseInt(precio);
		} while(isNaN(precio) || (precio <= 100 || precio >= 300));

		do{
			cantUnidades = prompt("ingrese la cantidad de unidades");
			cantUnidades = parseInt(cantUnidades);
		} while(isNaN(cantUnidades) || (cantUnidades <= 0 || cantUnidades > 1000));

		do{
			fabricante = prompt("ingrese el nombre del fabricante");
		} while(isNaN(fabricante) == false);


		if(tipoProducto == "alcohol" && (flagAlcohol == true || precio < precioAlcohol)){

			precioAlcohol = precio;
			cantUnidadesAlcoholMasBarato = cantUnidades;
			fabricanteAlcohol = fabricante;
			flagAlcohol = false;
		}


		switch(tipoProducto){
			case "barbijo":
				unidadesPorCompraBarbijo = unidadesPorCompraAlcohol + cantUnidades;//acumulador de cantidad de unidades por compra
				contadorCompraBarbijo++;//acumula la cantidad de compras
				break;
			case "jabon":
				unidadesPorCompraJabon = unidadesPorCompraJabon + cantUnidades;
				contadorCompraJabon++;
				break;
			case "alcohol":
				unidadesPorCompraAlcohol = unidadesPorCompraAlcohol + cantUnidades;
				contadorCompraAlcohol++;
				break;
		}
	}

	if(unidadesPorCompraBarbijo > unidadesPorCompraJabon && unidadesPorCompraBarbijo > unidadesPorCompraAlcohol){
		tipoUnidades = "barbijo";
		promedio = unidadesPorCompraBarbijo / contadorCompraBarbijo;
	} else{
		if(unidadesPorCompraJabon > unidadesPorCompraBarbijo && unidadesPorCompraJabon > unidadesPorCompraAlcohol){
			tipoUnidades = "jabon";
			promedio = unidadesPorCompraJabon / contadorCompraJabon;
		} else{
			// Sí no es Barbijo, ni Jabón.. es Alcohol
			tipoUnidades = "alcohol";
			promedio = unidadesPorCompraAlcohol / contadorCompraAlcohol;
		}
	}


	mensaje='Alcohol Unidades: ' + cantUnidadesAlcoholMasBarato +'<br>'+ ' Alcohol fabricante: ' + fabricanteAlcohol+'<br>';
	mensaje+=' El tipo con más unidades es: ' + tipoUnidades +'<br>'+ ' con un promedio por compra de ' + promedio+'<br>';
	mensaje+=' Unidades totales de jabon: ' + unidadesPorCompraJabon;

	document.write(mensaje);
}
