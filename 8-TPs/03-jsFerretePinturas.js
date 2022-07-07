/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let fahrenheitaCentigrados;
    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseInt(temperatura);
    fahrenheitaCentigrados = (temperatura - 32) * (5/9);
    fahrenheitaCentigrados = parseInt(fahrenheitaCentigrados);
    alert(`${temperatura} fahrenheit es igual a ${fahrenheitaCentigrados} centigrados`)
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigradosaFahrenheit;
    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseInt(temperatura);
    centigradosaFahrenheit = (temperatura * 1.8) + 32;
    centigradosaFahrenheit = parseInt(centigradosaFahrenheit);
    alert(`${temperatura} centigrados es igual a ${centigradosaFahrenheit} Fahrenheit`)
}
