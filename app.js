const body = document.getElementsByTagName("body");
const titulo = document.getElementById("titulo");
const colorHexNum = document.getElementById("colorhex-num");
const botonCambiar = document.getElementById("boton-cambiar");
const botonCopy = document.getElementById("copy-button");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// console.log((body[0].style.backgroundColor = "red"));

botonCambiar.addEventListener("click", fnCambiaFondo);
botonCopy.addEventListener("click", (e) => alert("copiado"));

function fnCambiaFondo() {
	const colorRndm = `#${fnRandom()}`;
	colorHexNum.innerText = colorRndm;
	body[0].style.backgroundColor = colorRndm;
	titulo.style.color = colorRndm;
}

function fnRandom() {
	const arrayHex = [];
	for (let i = 0; i < 6; i++) {
		arrayHex.push(hexValues[Math.floor(Math.random() * 15)]);
	}
	return arrayHex.join("");
}
