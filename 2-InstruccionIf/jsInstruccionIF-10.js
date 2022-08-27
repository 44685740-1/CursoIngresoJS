function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let notaExamen;
	let mensaje;
	notaExamen = Math.floor(Math.random() * 10 + 1);
	/*
	if(notaExamen < 4){
		alert(`Vamos, la proxima se puede te sacaste un ${notaExamen}`);
	} else if(notaExamen >= 9){
		alert(`excelente te sacaste un ${notaExamen}`);
	} else {
		alert(`aprobo te sacaste un ${notaExamen}`);
	}
	*/

	// otra forma de hacerlo mas eficiente por el profe
	// te ahorras hacer el if de aprobado
	if(notaExamen >= 9){
		mensaje = `excelente te sacaste un ${notaExamen}`
	} else{
		if(notaExamen < 4){
			mensaje = `Vamos, la proxima se puede te sacaste un ${notaExamen}`
		} else{
			mensaje = `aprobo te sacaste un ${notaExamen}`
		}
	}
	alert(mensaje);


	
}//FIN DE LA FUNCIÓN