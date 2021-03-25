const CalculateTemp = () => {
	const temp = document.getElementById('temp').value;
	const tempOption = document.getElementById('tempOption');
	const tempValue = tempOption.options[tempOption.selectedIndex].value;

	const celToFah = cel => {
		let fah = Math.round((cel * 9) / 5 + 32);
		return fah;
	};

	const fahToCel = fah => {
		let cel = Math.round(((fah - 32) * 5) / 9);
		return cel;
	};

	let result;
	if (tempValue == 'cel') {
		result = celToFah(temp);
		document.getElementById('tempResult').innerHTML = `${result} Fahrenheit`;
	} else {
		result = fahToCel(temp);
		document.getElementById('tempResult').innerHTML = `${result} Celsius`;
	}
};
