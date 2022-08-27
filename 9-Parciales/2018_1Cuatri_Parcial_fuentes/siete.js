/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
    let acumulador;
    let contador;
    let nota;
    let genero;
    let promedio;
    let varonesMayoraSeis;

    acumulador = 0;
    contador = 0;
    varonesMayoraSeis = 0;

    genero = "u";   //valor mal a proposito
    nota = -1;  //valor mal a proposito

    while(genero != "m" && genero != "f"){
        genero = prompt("ingrese su genero m/f").toLowerCase();

        while(!(nota >= 0 && nota <= 10)){
            nota = prompt("ingresa tu calificacion en el examen");
            nota = parseInt(nota);
            acumulador = nota;
        }

        while(contador < 4){
            contador++;

            genero = prompt("ingrese su genero m/f").toLowerCase();
            nota = prompt("ingresa tu calificacion en el examen");
            nota = parseInt(nota);
            acumulador = acumulador + nota;
            if(nota >= 6 && genero == "m"){
                varonesMayoraSeis++;
            } 

        }
    
    }

    promedio = acumulador / (contador + 1);
    alert(promedio);
    alert(`hay ${varonesMayoraSeis} hombres que sacaron nota mayor a 6`);


    
}
