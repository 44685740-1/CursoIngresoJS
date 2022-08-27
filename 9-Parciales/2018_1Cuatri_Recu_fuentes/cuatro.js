/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".
*/

function mostrar()
{
    let num1;
    let num2;
    let division;
    let suma;
    let mensaje;
    num1 = prompt("ingrese el primer numero");
    num1 = parseInt(num1);
    num2 = prompt("ingrese el segundo numero");
    num2 = parseInt(num2);

    suma = num1 + num2;
    division = num1 / num2;
    mensaje = `la suma es ${suma} y es menor a 50`

    if(num1 == num2){
        num1 = num1.toString();
        num2 = num2.toString();
        alert(num1 + num2);
    } else if(num1 > num2){
        alert(division);
    } else { 
        if(suma < 50 ){
            alert(mensaje);
        } else{
            alert(`la suma es ${suma}`)
        }
    }
}
