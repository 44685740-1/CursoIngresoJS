/**
 Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
 */
function mostrar()
{
    //los tres lados de un triangulo equilatero son los tres iguales
    let lado;
    let perimetro;
    lado = prompt("ingrese cuanto mide el lado del triangulo");
    lado = parseInt(lado);
    perimetro = lado * 3;
    alert(`el perimetro del triangulo equilatero es ${perimetro}`)
}
