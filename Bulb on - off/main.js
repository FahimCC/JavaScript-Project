const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const light = document.getElementById('light');

turnOff.addEventListener('click', function () {
	light.src = 'off.png';
});

turnOn.addEventListener('click', function () {
	light.src = 'on.png';
});
