/*

Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.
*/
function mostrar()
{
    let num1;
    let num2;
    let numAlCuadrado;
    let resto;
    let resta;
    let mensaje;
    num1 = prompt("ingres el primer numero");
    num1 = parseInt(num1);
    num2 = prompt("ingrese el segundon numero");
    num2 = parseInt(num2);
    
    numAlCuadrado = num1 * num2;
    resto = num1 % num2;
    resta = num1 - num2;
    mensaje = `el resto ${resto} es mayor a tres`;

    if (num1 == num2){
        alert(numAlCuadrado);
    } else if (resto == 0){
        alert(resta);
    } else {
        if(resto > 3){
            alert(mensaje);
        }
        alert(`resto igual a : ${resto}`);
    }

}
