/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let respuesta;
  let tipoProducto;
  let tipoProductoMasCaro;
  let tipoProductoMasCantidad;
  let cantBolsas;
  let cantBolsasMax;
  let acumuladorCantBolsas;

  let precioBolsa;
  let precioBolsaMax;
  let flagPrimero;
  let precioBruto;
  let acumuladorPrecioBruto;
  let descuento;
  let precioConDescuento;
  let mensaje;

  contadorBolsa = 0;
  acumuladorCantBolsas = 0;
  acumuladorPrecioBruto = 0;
  respuesta = true;
  flagPrimero = true;

  while(respuesta){
      do{
        tipoProducto = prompt("ingres el tipo de producto arena, cal o cemento").toLowerCase(tipoProducto);
      } while(tipoProducto != "cal" && tipoProducto != "arena" && tipoProducto != "cemento");

      do{
        cantBolsas = prompt("ingrese la cantidad de bolsas que va comprar del producto");
        cantBolsas = parseInt(cantBolsas);
      } while(isNaN(cantBolsas) || cantBolsas <= 0);
      
      do{
        precioBolsa = prompt("ingrese el precio de la bolsa");
        precioBolsa = parseInt(precioBolsa);
      } while(isNaN(precioBolsa) || precioBolsa < 0);

      acumuladorCantBolsas = acumuladorCantBolsas + cantBolsas;

      precioBruto = cantBolsas * precioBolsa;
      acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;

      if(acumuladorCantBolsas > 30){
          descuento = .75;
      } else{
        if(acumuladorCantBolsas > 9){
          descuento = .85;
        } else{
          descuento = 1;
        }
      }

      if(flagPrimero){
        cantBolsasMax = cantBolsas;
        tipoProductoMasCantidad = tipoProducto;
        precioBolsaMax = precioBolsa;
        tipoProductoMasCaro = tipoProducto;
        flagPrimero = false;
      } else{
        if(cantBolsas > cantBolsasMax){
          cantBolsasMax = cantBolsas;
          tipoProductoMasCantidad = tipoProducto;
        }

        if(precioBolsa > precioBolsaMax){
          precioBolsaMax = precioBolsa;
          tipoProductoMasCaro = tipoProducto;
        }
      }
    respuesta = confirm("¿Desea continuar?");
  }

  precioConDescuento = acumuladorPrecioBruto * descuento;
  if(acumuladorPrecioBruto == precioConDescuento){
    mensaje = `el importe total a apagar sin descuento es de ${acumuladorPrecioBruto} <br> el tipo de producto con mas cantidad de bolsas es ${tipoProductoMasCantidad} <br> el tipo de producto mas caro es ${tipoProductoMasCaro}`;
  } else{
    mensaje = `el importe total a apagar sin descuento es de ${acumuladorPrecioBruto} <br> y el importe total a pagar con descuento es de  ${precioConDescuento} <br> el tipo de producto con mas cantidad de bolsas es ${tipoProductoMasCantidad} <br> el tipo de producto mas caro es ${tipoProductoMasCaro}`;
  }
  document.write(mensaje);
}
