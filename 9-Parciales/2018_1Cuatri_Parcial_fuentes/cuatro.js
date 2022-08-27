/*
1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write
*/
function mostrar()
{
    //variables
    let contador;
    let nombre;
    let numeroDeEspera;
    let dni;
    let montoFactura;
    let contadorMenor80;
    let contadorMayoroIgual80;
    let acumuladorMontos;
    let promedio;
    let flagElQueMAsGasto;
    let nombreMAsGasto;
    let numeroDeEsperaMasGasto;
    let montoMasGrande;
    let mensaje;



    //inicializar
    contador = 0;
    contadorMenor80 = 0;
    contadorMayoroIgual80 = 0;
    acumuladorMontos = 0;
    flagElQueMAsGasto = true;


    while(contador < 5){
        contador++; //este contador cuanta las vueltas y tambien la cantidad de persinas que ingresaron

        do{
			nombre = prompt("ingrese su nombre").toLowerCase(nombre);
		} while(isNaN(nombre) == false);

        do{
            numeroDeEspera = prompt("ingrese su numero de espera")
            numeroDeEspera = parseInt(numeroDeEspera);
        } while(isNaN(numeroDeEspera) || numeroDeEspera < 0 || numeroDeEspera > 99);

        do{
            dni = prompt("ingrese su dni");
            dni = parseInt(dni);
        } while(isNaN(dni) || dni < 10000000 || dni > 99999999);

        do{
            montoFactura = prompt("ingrese el monto de la factura emitida");
            montoFactura = parseInt(montoFactura);
        } while(isNaN(montoFactura) || montoFactura < 0);

        acumuladorMontos = acumuladorMontos + montoFactura;

        if(dni >= 80000000){
            contadorMayoroIgual80++;
        } else{
            contadorMenor80++;
        }

        if(flagElQueMAsGasto){
            nombreMAsGasto = nombre;
            numeroDeEsperaMasGasto = numeroDeEspera;
            montoMasGrande = montoFactura;
        } else{
            if(montoFactura > montoMasGrande){
                nombre = nombreMAsGasto;
                numeroDeEspera = numeroDeEsperaMasGasto;
                montoFactura = montoMasGrande;
            }
        }
    }

    if(acumuladorMontos > 0){
        promedio = acumuladorMontos / contador; 
    }

    mensaje = `el promedio gastado por persona es de ${promedio} <br>`;
    mensaje += `la cantidad de personas que su dni es mayor o igual a 80000000 es de ${contadorMayoroIgual80} y la cantidad de peronas con dni menor a 80000000 es de ${contadorMenor80} <br>`;
    mensaje += `El nombre del que mas gasto ${nombreMAsGasto} y el numero de espera del que mas gasto es ${numeroDeEsperaMasGasto} con un monto de ${montoMasGrande}`;

    document.write(mensaje);

    

    

}
