let colori = [] 
console.log("data: ", d);
document.getElementById("saluto").innerHTML = "Oggi è il " + d.toLocaleString();

function elabora(){
	let numero = document.getElementById("inNumber").value;
	alert("il numero inserito è: " + numero);

	if(numero < 0 || numero > 30) {
		document.getElementById("error").innerHTML = "il numero inserito non rispetta il criterio";
		document.getElementById("inNumber").value = "";
		document.getElementById("outText").innerHTML = "Output";

	}
	else{
		document.getElementById("outTest").innerHTML = "Numero inserito: " + numero;
		document.getElementById("error").innerHTML = "Errori";
		document.getElementById("inNumber").value = "";
		colori.push(numero);
		console.log(colori);
		if (colori.length ===3) {
			let newColor = `rgb(${colori[0]},${colori[1]},${colori[2]})`;
			document.getElementById("outText").innerHTML = "TESTO COLORATO";
			document.getElementById("outText").style.color = newColor;

		} 

	}
}

function reset(){
	document.getElementById("inNumber").value = "";
}
