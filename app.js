const body = document.getElementsByTagName("body");
const colorHexNum = document.getElementById("colorhex-num");
const botonCambiar = document.getElementById("boton-cambiar");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// console.log((body[0].style.backgroundColor = "red"));

botonCambiar.addEventListener("click", fnCambiaFondo);

function fnCambiaFondo(colorRnd) {
	colorHexNum.innerText = `#${fnRandom()}`;
	body[0].style.backgroundColor = `#${fnRandom()}`;
}

function fnRandom() {
	const arrayHex = [];
	for (let i = 0; i < 6; i++) {
		arrayHex.push(hexValues[Math.floor(Math.random() * 15)]);
	}
	return arrayHex.join("");
}
