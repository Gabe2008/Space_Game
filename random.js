function random(min, max, integer) {
	if (integer) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return (Math.random() * (max - min + 1)) + min;
	}
}

//basic random number generator
