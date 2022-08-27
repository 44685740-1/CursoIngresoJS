function mostrar()
{
	/*
	//ehercicio 7 que esta en el index
	let edad;
	let estadoCivil;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	
	if (edad < 18 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero")
	}
	*/

	/*
	Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
	1) Si es menor de 13 , mostrar el mensaje “feliz día”.
	2) Si es adolescente el mensaje es “usted es adolescente”
	a) Si tiene 17 años además mostrar el mensaje “último año!!!”
	3) Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
	a) Si tiene 33 años , además mostrar el mensaje “como cristo”
	b) Si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
	c) Si tiene 88, además mostrar el mensaje “lindo número''
	4) Si la edad es par , además mostrar , “sos par!!”.

	*/

	let edad;
	let mensaje;
	let esPar;
	let mensajePar
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	esPar = edad % 2;
 

	if(edad < 13){
		mensaje = `feliz dia`;
	} else{
		if(edad < 18){
			mensaje = "sos adolescente"
			if(edad == 17){
				mensaje = mensaje + " ultimo año";
			} 
		} else{
			if(edad == 33){
				mensaje = "la edad de cristo";
			} else{
				mensaje = "tenes edad para laburar "
				if(edad == 33){
					mensaje = "como cristo";
				} else{
					if(edad >= 60){
						mensaje = "a jubilarse";
						if(edad == 88){
							mensaje = "lindo numero";
						}
					} 
				}
			}
		}
	}
	
	if(esPar == 0){
		mensajePar = mensaje + " ,sos par"
		alert(mensajePar);
	} else{
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN