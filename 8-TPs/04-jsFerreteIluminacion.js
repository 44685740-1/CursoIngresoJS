/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    /*
    //TP 4 resuelto por el profe
    //usando solo if
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;//precio sin descuento
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    let mensaje;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;
    descuento=1;//para que no cambie el precio cuando no hay descuento
    //identado como yo uso las llaves
    //usar esta forma  para calcular los porcentajes de descuento
    if(cantidadLamparas>=6){
        descuento=0.50;
    } else {
        if(cantidadLamparas==5){
            if(marcaLamparas=="ArgentinaLuz"){
                descuento=0.60;
            }
            else{
                descuento=0.70;
            }
        } else {
            if(cantidadLamparas==4){
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas"){
                    descuento=0.75;
                } else{
                    descuento=0.80;
                }
            }
            else{
                if(cantidadLamparas==3){
                    if(marcaLamparas=="ArgentinaLuz"){
                        descuento=0.85;
                    }
                    else{
                        if(marcaLamparas=="FelipeLamparas"){
                            descuento=0.90;
                        }
                        else{
                            descuento=0.95;
                        }
                    }
                }
            }
        }
    }
    //de esta forma calculo el porcentaje solo una vez 
    //y muesto el mensaje solo una vez
    precioFinal=precioBruto*descuento;//aca en donde nos sirve que declaramos deacuento = 1, no afecta cuando no hay descuento
    if(precioFinal>=120)
    {   
        ingresosBrutos=precioBruto*0.10;//la otra forma es calcularlo sobre el precioFinal directamente
        precioFinal=precioFinal+ingresosBrutos;
        mensaje="Usted pago: "+precioFinal+" donde: "+ingresosBrutos+"$ son ingresos brutos";
        alert(mensaje);
    }
    document.getElementById("txtIdprecioDescuento").value=precioFinal.toFixed(2);
    */

    


    /*
    //resolucion solo switch
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;//precio sin descuento
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    let mensaje;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;

    switch(cantidadLamparas){
        case 1:
        case 2:
            descuento = 1;
            break;
        case 5:
            switch(marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.60; //descuento 40%
                    break;
                default:
                    descuento=0.70;//descuento 30%
                    break;
            }
        break;
        case 4:
            switch(marcaLamparas){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=0.75;//descuento de 25%
                    break;
                default:
                    descuento=0.80;//descuento del 20%
                    break;
            }
        break;
        case 3:
            switch(marcaLamparas){
                case "ArgentinaLuz":
                    descuento=0.85;//descuento del 15%
                    break;
                case "FelipeLamparas":
                    descuento=0.90;//descuento del 10%
                    break;
                default:
                    descuento=0.95;//resto de las marcas descuento del 5%
                    break;
            }
        break;
        default:
            descuento = 0.5;//descuento del 50%
            break;
    }

    //para el puento e) si se puede usar if
    precioFinal=precioBruto*descuento;
    if(precioFinal>=120)
    {   
        ingresosBrutos=precioBruto*0.10;//la otra forma es calcularlo sobre el precioFinal directamente
        precioFinal=precioFinal+ingresosBrutos;
        mensaje="Usted pago: "+precioFinal+" donde: "+ingresosBrutos+"$ son ingresos brutos";
        alert(mensaje);
    }
    document.getElementById("txtIdprecioDescuento").value=precioFinal;
    */

    




    /*
    //tp 4 switch if
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;//precio sin descuento
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    let mensaje;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;

    switch(cantidadLamparas){
        case 1:
        case 2:
        descuento = 1
        break;
        case 5:
            if(marcaLamparas == "ArgentinaLuz"){
                descuento=0.60; //descuento 40%
            } else{
                descuento=0.70;//descuento 30%
            }
        break;
        case 4:
            if(marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas"){
                descuento=0.75;//descuento de 25%
            } else{
                descuento=0.80;//descuento del 20%
            }
        break;
        case 3:
            if(marcaLamparas == "ArgentinaLuz"){
                descuento=0.85;//descuento del 15%
            } else if(marcaLamparas == "FelipeLamparas"){
                descuento=0.90;//descuento del 10%
            } else{
                descuento=0.95;//resto de las marcas descuento del 5%
            }
        break;
        default:
            descuento = 0.5;//descuento del 50%
            break;
    }

    //para el puento e) si se puede usar if
    precioFinal=precioBruto*descuento;
    if(precioFinal>=120)
    {   
        ingresosBrutos=precioBruto*0.10;//la otra forma es calcularlo sobre el precioFinal directamente
        precioFinal=precioFinal+ingresosBrutos;
        mensaje="Usted pago: "+precioFinal+" donde: "+ingresosBrutos+"$ son ingresos brutos";
        alert(mensaje);
    }
    document.getElementById("txtIdprecioDescuento").value=precioFinal;
    */




    /*
    //tp 4 if switch
    let precioLamparas;
    let cantidadLamparas;
    let marcaLamparas;
    let precioBruto;//precio sin descuento
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    let mensaje;
    
    precioLamparas=35;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marcaLamparas=document.getElementById("Marca").value;
    precioBruto=cantidadLamparas*precioLamparas;


    if(cantidadLamparas >= 6){
        descuento = 0.5;//descuento del 50%
    } else{
            if(cantidadLamparas == 5){
                switch(marcaLamparas){
                    case "ArgentinaLuz":
                        descuento=0.60; //descuento 40%
                        break;
                    default:
                        descuento=0.70;//descuento 30%
                        break;
                }
            } else{
                if(cantidadLamparas == 4){
                    switch(marcaLamparas){
                        case "ArgentinaLuz":
                        case "FelipeLamparas":
                            descuento=0.75;//descuento de 25%
                            break;
                        default:
                            descuento=0.80;//descuento del 20%
                            break;
                    }
                } else{
                    if(marcaLamparas == 3){
                        switch(marcaLamparas){
                            case "ArgentinaLuz":
                                descuento=0.85;//descuento del 15%
                                break;
                            case "FelipeLamparas":
                                descuento=0.90;//descuento del 10%
                                break;
                            default:
                                descuento=0.95;//resto de las marcas descuento del 5%
                                break;
                        } 
                    } else{
                        descuento = 1;
                    }
                }
            }
        }


     //para el puento e) si se puede usar if
     precioFinal=precioBruto*descuento;
     if(precioFinal>=120)
     {   
         ingresosBrutos=precioBruto*0.10;//la otra forma es calcularlo sobre el precioFinal directamente
         precioFinal=precioFinal+ingresosBrutos;
         mensaje="Usted pago: "+precioFinal+" donde: "+ingresosBrutos+"$ son ingresos brutos";
         alert(mensaje);
     }
     document.getElementById("txtIdprecioDescuento").value=precioFinal;
     */
}