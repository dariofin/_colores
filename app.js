const colorHexNum = document.getElementById("colorhex-num");
const botonCambiar = document.getElementById("boton-cambiar");

botonCambiar.addEventListener("click", cambiarColor(colorRandom));
// colorHexNum.innerText = "hola";

function cambiarColor(colorRandom) {
	colorHexNum.innerText = colorRandom;
}
