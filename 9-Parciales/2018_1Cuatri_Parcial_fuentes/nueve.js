/*
3)Una distribuidora de bebidas llena 5 comiones con sus productos y necesita guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad (cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de gaseosa vendida a $150,
cada litro de agua a $100 y cada litro de cerveza a $200.
*/
function mostrar()
{
    //variables
    let nombre;
    let contador;
    let cantAgua;
    let cantGaseosa;
    let cantCerveza;
    let acumuladorCantGaseosa;
    let acumuladorcantAgua;
    let acumuladorcantCerveza;
    let liquidoConMasCantidad;
    let totalFacturacion;
    let mensaje;

   //iniciaizar
   contador = 0;
   acumuladorCantGaseosa = 0;
   acumuladorcantAgua = 0;
   acumuladorcantCerveza;


   while(contador < 5){
    contador++;

    do{
        nombre = prompt("ingrese su nombre");
    } while(isNaN(nombre) == false);

    do{
        cantGaseosa = prompt("ingrese la cantidad de litro de gaseosa");
        cantGaseosa = parseInt(cantGaseosa);
    } while(isNaN(cantGaseosa) || cantGaseosa < 0);

    acumuladorCantGaseosa = acumuladorCantGaseosa + cantGaseosa;

    do{
        cantAgua = prompt("ingrese la cantidad de litro de agua");
        cantAgua = parseInt(cantAgua);
    } while(isNaN(cantAgua) || cantAgua < 0);

    acumuladorcantAgua = acumuladorcantAgua + cantAgua;


    do{
        cantCerveza = prompt("ingrese la cantidad de litro de cerveza");
        cantCerveza = parseInt(cantCerveza);
    } while(isNaN(cantCerveza) || cantCerveza < 0);

    acumuladorcantCerveza = acumuladorcantCerveza + cantCerveza;
   }

   //if mayor cantidad de liquido

   if(acumuladorCantGaseosa > acumuladorcantAgua && acumuladorCantGaseosa > acumuladorcantCerveza){
        liquidoConMasCantidad = acumuladorCantGaseosa;
   } else{
    if(acumuladorcantAgua > acumuladorCantGaseosa && acumuladorcantAgua > acumuladorcantCerveza){
        liquidoConMasCantidad = acumuladorcantAgua;
    } else{
        //si o si el de mas cantidad es cerveza
        liquidoConMasCantidad = acumuladorcantCerveza;
    }
   }

   totalFacturacion = (acumuladorCantGaseosa * 150) + (acumuladorcantAgua * 100) + (acumuladorcantCerveza * 200);

   mensaje = `la bebida que esta siendo transportada con mas cantidad es ${liquidoConMasCantidad} <br>`;
   mensaje += `el total de facturacion de todas las bebidas juntas es de ${totalFacturacion}`;

   document.write(mensaje);



}
