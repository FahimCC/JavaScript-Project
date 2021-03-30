const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	counter.innerHTML = 0;

	const updateCounter = () => {
		const targetCount = +counter.getAttribute('data-target');

		const startingCount = Number(counter.innerHTML);

		const increment = targetCount / 100;

		if (startingCount < targetCount) {
			counter.innerHTML = `${Math.round(startingCount + increment)}`;
			setTimeout(updateCounter, 10);
		} else {
			counter.innerHTML = targetCount;
		}
	};

	updateCounter();
});
