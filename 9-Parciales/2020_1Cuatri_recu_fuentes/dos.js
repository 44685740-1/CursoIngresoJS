/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/
  function mostrar()
  {
    //variables
    let nombreAlumno;
    let carrera;
    let estadoDeCarrera;
    let genero;
    let nota;
    let respuesta;
    let contadorProgramacio;
    let contadorDiseño;
    let contadorPsicologia;
    let conatadorMujeresProgramacion;
    let contadorNoBinario;
    let acumuladorNotaFinalizantes;
    let contadorAlumnosFinalizantes;
    let promedioFinalizantes;
    let flagPrimeroPsicologiaNoBinario;
    let mejorNotaNombreNoBinario;
    let mejorNotaNoBinario;
    let carreraConMasAlumnos;
    let mensaje;

    //inicializar

    respuesta = true;
    contadorDiseño = 0;
    contadorProgramacio = 0;
    contadorPsicologia = 0;
    conatadorMujeresProgramacion = 0;
    contadorNoBinario = 0;
    acumuladorNotaFinalizantes = 0;
    contadorAlumnosFinalizantes = 0;


    while(respuesta){

      do{
        nombreAlumno = prompt("ingrese su nombre").toLowerCase(nombreAlumno);  
      } while(isNaN(nombreAlumno) == false);

      do{
        carrera = prompt("ingrese su carrera programacio, psicologia o diseño grafico").toLowerCase(carrera);
      } while(carrera != "programacio" && carrera != "psicologia" && carrera != "diseño grafico");

      do{
        estadoDeCarrera = prompt("ingrese el estado de la carrera en curso, abandono o finalizado").toLowerCase(estadoDeCarrera);
      } while(estadoDeCarrera != "en curso" && estadoDeCarrera != "abandono" && estadoDeCarrera != "finalizado");

      do{
        genero = prompt("ingrese su genero m/f o no binario").toLowerCase(genero);
      } while(genero != "m" && genero != "f" && genero != "no binario");

      do{
        nota = prompt("ingrese su nota");
        nota = parseInt(nota);
      } while(isNaN(nota) || nota < 1 || nota > 10);


      if(carrera == "programacio"){
        contadorProgramacio++;
      } else{
        if(carrera == "psicologia"){
          contadorPsicologia++;
        } else{
          // si o si es diseño grafico
          contadorDiseño++;
        }
      }


      if(genero== "f" && carrera == "programacio"){
          conatadorMujeresProgramacion++;
      }


      if(genero == "no binario"){
          contadorNoBinario++;
      }

      if(estadoDeCarrera == "finalizado"){
        acumuladorNotaFinalizantes = acumuladorNotaFinalizantes + nota;
        contadorAlumnosFinalizantes++;
      }

      if(genero == "no binario" && carrera == "psicologia"){
        if(flagPrimeroPsicologiaNoBinario){
            mejorNotaNoBinario = nota;
            mejorNotaNombreNoBinario = nombreAlumno;
            flagPrimeroPsicologiaNoBinario = false;
        } else{
          if(nota > mejorNotaNoBinario){
            nota = mejorNotaNoBinario;
            nombreAlumno = mejorNotaNombreNoBinario;
          }
        }
      }
      respuesta = confirm("¿desea continuar?");
    }
    promedioFinalizantes = acumuladorNotaFinalizantes / contadorAlumnosFinalizantes;

    //if carrera con mas alumnos

    if(contadorProgramacio > contadorPsicologia && contadorProgramacio > contadorDiseño){
        carreraConMasAlumnos = "programacion";
    } else{
      if(contadorDiseño > contadorProgramacio && contadorDiseño > contadorPsicologia){
        carreraConMasAlumnos = "diseño grafico";
      } else{
        // si o si es psicologia
        carreraConMasAlumnos = "psicologia";
      }
    }

    
  }
