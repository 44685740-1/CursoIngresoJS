/*
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne
*/
function mostrar()
{
    let contador;
    let sabor;
    let kilos;
    let promedio;
    let acumuladorKilos;
    
    contador = 0;
    acumuladorKilos = 0;

    do {
        contador++;
        do{
            kilos = prompt("ingrese el peso de la bolsa");
            kilos = parseInt(kilos);
            acumuladorKilos = acumuladorKilos + kilos;
        }while(!(kilos >= 0 && kilos <= 500))


        do{
            sabor = prompt("ingrese el sabor");
        } while(!(sabor == "carne" || sabor == "vegetales" || sabor == "pollo"));



    }while(contador < 2);

    promedio = acumuladorKilos / contador;

    alert(`el promedio de kilos de cada bolsa es de ${promedio}`);

}
