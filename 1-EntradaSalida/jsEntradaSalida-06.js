/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt(num1)
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2)
	// seria mejor una variable resultado
	alert(num1 + num2) // no es del todo correcto hacer operaciones en el alert, se va eñl alert y se va el resultado
}

