/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{	
	/*
	let nombre = prompt("decime tu nombre");
	alert(nombre);
	*/

	/*
1.	Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguar o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

let importe;
let cantidadProducto;
let marca;
let origen;
let i;
let flagPrimerIngreso=true;
let minimoImporte;
let minimoImportePais;
let maximoImporteMarca;
let maximoImporte;
let promedio;
let acumuladorImporte=0;
let acumuladorChina=0;
let maximoConDescuento;
let mensaje;
for(i=0;i<2;i++)
{
	do
	{
		importe = prompt("Ingrese el importe: ");
		importe=parseFloat(importe);
	}while(isNaN(importe)||importe<=0);
	do
	{
		marca=prompt("Ingrese la marca");
	}while(isNaN(marca)==false);
	do
	{
		origen = prompt("Ingrese el origen: ").toLowerCase(origen);
	}while(!isNaN(origen) && (origen!="china"&&origen!="uruguay"&&origen!="paraguay"));
	do
	{
		cantidadProducto = prompt("Ingrese la cantidad de producto: ");
		cantidadProducto = parseInt(cantidadProducto);
	}while(isNaN(cantidadProducto)==true && cantidadProducto<=0)


	if(flagPrimerIngreso==true)
	{
		minimoImporte=importe;
		maximoImporte=importe;
		maximoImporteMarca=marca;
		minimoImportePais=origen;
		flagPrimerIngreso=false;
	}
	else
	{
		if(maximoImporte<importe)
		{
			maximoImporte=importe;
			maximoImporteMarca=marca;
		}
		if(minimoImporte>importe)
		{
			minimoImporte=importe;
			minimoImportePais=origen;
		}
	}
	/*
	if(flagPrimerIngreso==true || maximoImporte<importe){
		maximoImporte=importe;
		maximoImporteMarca=marca;
	}
	if(flagPrimerIngreso==true || minimoImporte>importe){
		minimoImporte=importe;
		minimoImportePais=origen;
		flagPrimerIngreso==false;
	}*/


	acumuladorImporte+=importe;
	
	if(origen=="china")
	{
		acumuladorChina+=cantidadProducto;
	}

}
promedio=acumuladorImporte/i;
maximoConDescuento=maximoImporte*0.9;

//mensaje = "<br> El minimo importe es: "+minimoImporte+" y pertecene al pais: "+minimoImportePais + "<br> El maximo importe es: "+maximoImporte+" y pertecene a la marca: "+ maximoImporteMarca + "<br> El promedio de importe es: "+promedio + "<br> La cantidad de productos de China es: "+acumuladorChina + "<br> El descuento sobre "+maximoImporte+" es "+maximoConDescuento;
mensaje = `<br> el minimo importe es ${minimoImporte} y pertenece al pais de ${minimoImportePais} <br> El maxio importe es: ${maximoImporte} y pertenece a la marca ${maximoImporteMarca} <br> el rpomedio de importe es: ${promedio} <br> la cantidad de productos de china es de ${acumuladorChina} <br> el descuento sobre ${maximoImporte} es ${maximoConDescuento}`;
document.write(mensaje)
/*
document.write("<br> El minimo importe es: "+minimoImporte+" y pertecene al pais: "+minimoImportePais);
document.write("<br> El maximo importe es: "+maximoImporte+" y pertecene a la marca: "+ maximoImporteMarca);
document.write("<br> El promedio de importe es: "+promedio);
document.write("<br> La cantidad de productos de China es: "+acumuladorChina);
document.write("<br> El descuento sobre "+maximoImporte+" es "+maximoConDescuento);
*/
}

