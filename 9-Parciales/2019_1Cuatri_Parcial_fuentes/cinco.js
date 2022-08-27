/*
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
Curso de ingreso UTN FRA
*/
function mostrar()
{
    let mensaje;
    let continente;
    let dias;
    let medioDepago;
    let precioDias;
    let precioBruto;
    let precioConDescuento;
    let descuento;

    precioDias = 100;
    continente = document.getElementById("Marca").value;
    dias = prompt("indique la cantidad de dias que se va a ospedar");
    dias = parseInt(dias);
    medioDepago = prompt("indique su forma de pago");

    precioBruto = dias*precioDias;

   //hay qie tener cuidado con donde ponemos los break
   //hay que ponerlo abajo de la llave para que efectivamente salga
    switch (continente) {
        case "América":
            switch(medioDepago){
                case "debito":
                    descuento = .4;
                    break;
                default:
                    descuento = .5;
                    break;
            }
        break;
        case "África":
            switch(medioDepago){
                case "mercado pago":
                case "efectivo":
                    descuento = .55 //0.4 + 0.15 = 0.55 
                    break;
                default:
                    descuento = .4
                    break;
            }
        break;
        case "Europa":
            switch(medioDepago){
                case "debito":
                    descuento = .65 // 100 - (100 * (0.2 + 0.15) )
                    break;
                case "mercado pago":
                    descuento = .7 // 100 - (100 * (0.2 + 0.1))
                    break;
                default:
                    descuento =  .75 //100 - (100 * (0.2 + 0.05)
                    break;
            }
        break;
        default:
            descuento = 1.2;
            break;
    }
    
    precioConDescuento = precioBruto * descuento;
    mensaje = `usted tiene que pagar ${precioConDescuento} pesos`;
    alert(mensaje);
}
