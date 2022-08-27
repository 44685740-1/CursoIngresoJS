/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    let numero;
    let continuar;
    let contador;
    let contadorPar;
    let contadorImpar;
    let conatdorCeros;
    let acumuladorPositivos;
    let conatadorPositivos;
    let acumuladorNegativos;
    let promedio;
    let mensajePromedio;
    let mensajeSumaNegativos;
    let mensajeCantCeros;
    let mensajeCantPares;
    let mensajeCantImpares;

    continuar = true;
    contador = 0;
    contadorImpar = 0;
    contadorPar = 0;
    conatdorCeros = 0;
    conatadorPositivos = 0;
    acumuladorPositivos = 0;
    acumuladorNegativos = 0;

    //En este caso entendemos porque es util usar el do while ya que si o si se ejecuta al menos una 
    //y no repetimos codigo adentro y afuera del loop

    do {
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);
        continuar= confirm("desea continuar??")
        if(numero == 0){
            conatdorCeros++;
        } else{
            if((numero % 2) == 0){
                contadorPar++;
            } else {
                contadorImpar++;
            }
        }

        if(numero > 0){
            conatadorPositivos++;
            acumuladorPositivos = acumuladorPositivos + numero;
        } else{
            acumuladorNegativos = acumuladorNegativos + numero;
        }
      }
      while ((numero >= -100 && numero <= 100) && continuar==true);


      promedio = acumuladorPositivos / conatadorPositivos;

      mensajePromedio = `El promedio de los positivos es de ${promedio}`;
      mensajeSumaNegativos = `La suma de los numeros negativos es de ${acumuladorNegativos}`;
      mensajeCantCeros = `la cantidad de ceros es de ${conatdorCeros}`;
      mensajeCantImpares = `la cantidad de numeros impares es de ${contadorImpar}`;
      mensajeCantPares = `la cantidad de numeros pares es de ${contadorPar}`;
      //document.write("<br>"); sirve para hacer un renglon de espacio o salto de linea
      document.write(mensajeCantPares);
      document.write("<br>");
      document.write(mensajeCantImpares);
      document.write("<br>");
      document.write(mensajeCantCeros);
      document.write("<br>");
      document.write(mensajePromedio);
      document.write("<br>");
      document.write(mensajeSumaNegativos);
}
