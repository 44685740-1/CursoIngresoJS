
function mostrar()
{
    let perimetro;
    let ancho;
    let largo;

    ancho = prompt("ingrese el ancho del rectangulo");
    ancho = parseInt(ancho);
    largo = prompt("ingrese el largo del rectangulo");
    largo = parseInt(largo);
    perimetro = (ancho * 2) + (largo * 2);
    alert(`el perimetro del rectangulo es ${perimetro}`)
}
