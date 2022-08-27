/*
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
    let mensaje;
    let planeta;
    planeta = prompt("ingrese el nombre de un planeta del sistema solar");

    switch (planeta) {
        case "tierra":
            mensaje = "vivimos aca";
            break;
        case "mercurio":
        case "venus":
        case "marte":
        case "jupiter":
            mensaje = "aca hace mas calor";
            break;
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "aca hace mas frio";
            break;
        default:
            mensaje = "ingrese un planeta valido";
    }
    alert(mensaje);


    

}
