/* 
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{
    let persona1;
    let persona2;
    let persona1Peso;
    let persona2Peso;
    let sumaKilos;
    let promedioPeso;
    let numeroDePersonas;
    
    numeroDePersonas = 2;

    persona1 = prompt("ingrese el nombre de la primer persona");
    persona2 = prompt("ingrese el nombre de la segunda persona");
    persona1Peso = prompt("ingrese el peso de la primer persona");
    persona1Peso = parseInt(persona1Peso);
    persona2Peso = prompt("ingrese el peso de la segunda persona");
    persona2Peso = parseInt(persona2Peso);

    sumaKilos = persona1Peso + persona2Peso;
    promedioPeso = sumaKilos / numeroDePersonas;

    alert(`ustedes se llaman ${persona1} y ${persona2} pesan ${persona1Peso} y ${persona2Peso} kilos, que sumados sus kilos son ${sumaKilos} y el promedio de peso ${promedioPeso}`)
}
