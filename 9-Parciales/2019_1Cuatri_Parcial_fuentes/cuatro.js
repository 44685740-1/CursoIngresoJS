/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/

function mostrar()
{
    //resasignar variable mensaje y usar solo un alert
    let num1;
    let num2;
    let resta;
    let suma;
    let mensaje;
    let sumaConcatenada;
    num1 = prompt("ingrese el primer numero");
    num1 = parseInt(num1);//lo convierto a entero
    num2 = prompt("ingrese el segundo numero");
    num2 = parseInt(num2);//lo convierto a entero

    resta = num1 - num2;
    suma = num1 + num2;//esta suma no se puede usar para concatenar porque opera con enteros y los suma
    mensaje = `la resta es ${resta} y supero a 10`;
    if(num1 == num2){
        //convierto los numeros a stings para poder concatenar
        num1 = num1.toString();
        num2 = num2.toString();
        sumaConcatenada = num1 +num2;
        mensaje = (sumaConcatenada);
    } else if (num1 > num2){
        if(resta > 10){
            mensaje = mensaje;
        } else{
            mensaje = resta;
        }
    } else {
        mensaje = suma;
    }
    alert(mensaje);
}
