/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //no hace falta el radio pero lo puse solo para poder copiar y pegar
    let ancho;
    let largo;
    let radio;
    let perimetro;
    let cantAlambre;
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    largo = document.getElementById("txtIdLargo").value; 
    largo = parseInt(largo);
    radio = document.getElementById("txtIdRadio").value;
    radio =  parseInt(radio);
    perimetro = (largo * 2) + (ancho * 2);
    cantAlambre = perimetro * 3;
    alert(`hay que comprar ${cantAlambre} metros de alambre`)
}
function Circulo () 
{
	let ancho;
    let largo;
    let radio;
    let perimetro;
    let pi;
    let cantidadHilo;
    pi = 3.14;
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    largo = document.getElementById("txtIdLargo").value; 
    largo = parseInt(largo);
    radio = document.getElementById("txtIdRadio").value;
    radio =  parseInt(radio);
    perimetro = 2 * pi * radio;
    cantidadHilo = perimetro * 3;
    alert(`cada hilo tiene que ser de ${cantidadHilo}`)

}
function Materiales () 
{
    //variables
	let largoDelTerreno;
	let anchoDelTerreno;
	let areaDelTerreno;
	let bolsasCal;
	let bolsasCemento;
	let mensaje;
	//entrada de datos
	largoDelTerreno = document.getElementById("txtIdLargo").value;
	anchoDelTerreno = document.getElementById("txtIdAncho").value;
	//proceso los datos
	largoDelTerreno = parseFloat(largoDelTerreno);
	anchoDelTerreno = parseFloat(anchoDelTerreno);
	areaDelTerreno = largoDelTerreno * anchoDelTerreno;
	bolsasCal = areaDelTerreno * 3;
	bolsasCemento = areaDelTerreno * 2;
	//salida de datos
	mensaje = "Se necesitan ";
	mensaje = mensaje + bolsasCal;
	mensaje += " bolsas de cal y ";
	mensaje += bolsasCemento+" bolsas de cemento para el area "+areaDelTerreno+" metros cuadrados"
	alert(mensaje);
}