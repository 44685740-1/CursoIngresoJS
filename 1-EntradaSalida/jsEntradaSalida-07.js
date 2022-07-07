/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
// no usar variables globales
function sumar()
{	
	let num1;
	let num2;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);	
	let suma;
	suma = num1 + num2;
	alert(`la suma es ${suma}`)
}

function restar()
{
	let num1;
	let num2;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);	
	let resta;
	resta = num1 - num2;
	alert(`la resta es ${resta}`)
}

function multiplicar()
{ 
	let num1;
	let num2;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);	
	let multiplicar;
	multiplicar = num1 * num2;
	alert(`la multiplicacion es ${multiplicar}`)
}

function dividir()
{
	let num1;
	let num2;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1);
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);	
	let dividir;
	dividir = num1 / num2;
	alert(`la division es ${dividir}`)
}

