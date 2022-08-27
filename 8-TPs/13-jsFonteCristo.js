/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}

function NumerosPares(){
    let numero;
    let cantPares;

    cantPares = 0;
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    while(numero < 0){
        alert("te dijimos Positivos");
        numero = prompt("ingresa un numero positivo");
        numero = parseInt(numero);
    }

    while(numero > 0){
        numero = numero - 1
        if(numero % 2 == 0){
            cantPares++;
        }
    }
    alert(cantPares);
}

function NumerosImpares(){
    let numero;
    let cantImpares;
    cantImpares = 0;
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    while(numero < 0){
        alert("te dijimos Positivos");
        numero = prompt("ingresa un numero positivo");
        numero = parseInt(numero);
    }

    while(numero > 0){
        numero = numero - 1
        if(numero % 2 != 0){
            cantImpares++;
            console.log(cantImpares);
        }
    }
    alert(cantImpares);

}

function NumerosDivisibles(){
    let numero;
    let losOtrosNumeros;
    let contadorEsDivisible;

    contadorEsDivisible = 0;
    losOtrosNumeros = 0;
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    while(numero < 0){
        alert("te dijimos Positivos");
        numero = prompt("ingresa un numero positivo");
        numero = parseInt(numero);
    }

    while(numero > 0){
        losOtrosNumeros = numero - 1
        if(losOtrosNumeros % numero == 0){
            contadorEsDivisible++;
            console.log(contadorEsDivisible);
        }
        numero = numero - 1;
    }
}

function VerificarPrimo(){
    let numero;
    let mensaje;
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    while(numero < 0){
        alert("te dijimos Positivos");
        numero = prompt("ingresa un numero positivo");
        numero = parseInt(numero);
    }

    if(numero <= 1){
        mensaje = "no es primo";
    }
    alert(mensaje);

    if(numero > 1 && numero % numero == 0){
        alert("es primo");
    } 
}

function NumerosPrimos(){
    let numero;
    numero = document.getElementById("txtIdNumero").value;
    numero = parseInt(numero);

    while(numero < 0){
        alert("te dijimos Positivos");
        numero = prompt("ingresa un numero positivo");
        numero = parseInt(numero);
    }
}