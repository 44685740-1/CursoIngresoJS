/*
Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.
*/
function mostrar()
{
    let mensaje;
    let dia;
    
    dia = prompt("ingrese el dia de la semana en el que se encuentra");

    switch (dia) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "a trabajar";
            break;
        case "sabado":
        case "domingo":
            mensaje = "buen finde";
            break;
        default:
            mensaje = "ingrese un dia de la semana valido";
    }
    alert(mensaje);
    
}
