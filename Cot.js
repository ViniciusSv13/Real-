const input = document.getElementById("input");
const bt = document.getElementsByClassName("BTN");
const Coins = ["3.71", "4.23", "4.67"];

const Convert = () => {
	if (input.value){
		document.getElementById("Valor").innerHTML = input.value + " R$ VALE " + (input.value / Coins[0]).toFixed(2) + " US$";
	}
}
bt[0].addEventListener("click", Convert);


const ConvertE = () => {
	if (input.value) 
		{document.getElementById("Valor").innerHTML = input.value + " R$ VALE " + (input.value / Coins[1]).toFixed(2) + " €";}	
}

bt[1].addEventListener("click", ConvertE);


const ConvertL = () => {
	if (input.value){
	document.getElementById("Valor").innerHTML = input.value + " R$ VALE " + (input.value / Coins[2]).toFixed(2) + " £";}
}

bt[2].addEventListener("click", ConvertL);










