/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/
function mostrar()
{
    let altura;
    let genero;
    let contador;
    let promedio;
    let acumuladorAltura;
    contador = 0;
    acumuladorAltura = 0;
    promedio = 0;

    do {
        genero = prompt("ingrese su genero").toLowerCase();
   } while(genero != "f" && genero != "m");

   do {
        altura = prompt("ingrese su altura");
        altura = parseInt(altura);
        acumuladorAltura = acumuladorAltura + altura;
   } while(!(altura >= 0 && altura <= 250));

   
}
