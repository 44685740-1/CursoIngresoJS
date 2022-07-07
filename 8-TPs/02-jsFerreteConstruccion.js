/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
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
    cantAlambre = perimetro / 3;
    alert(`la cantidad de alambre es de ${cantAlambre}`)

}
function Circulo () 
{
	let ancho;
    let largo;
    let radio;
    let perimetro;
    let pi;
    let tamañoHilo;
    pi = 3.14;
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    largo = document.getElementById("txtIdLargo").value; 
    largo = parseInt(largo);
    radio = document.getElementById("txtIdRadio").value;
    radio =  parseInt(radio);
    perimetro = 2 * pi * radio;
    tamañoHilo = perimetro / 3;
    alert(`cada hilo tiene que ser de ${tamañoHilo}`)

}
function Materiales () 
{
	
}