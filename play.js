function play() {
	//console.log(ship.vx);
	g.move(ship);
	let collision = g.contain(ship, g.stage, false);

	missiles.children.forEach(missile => {
		g.move(missile);
	});
	
	space.tileY += speed;
	if (loopStatus == true) {
		speed += 0.01*1/60
	}
	timer += 1/60;
	//console.log(Math.floor(timer));
	
	if (loopStatus == false && timer > 12-1/60) {
		console.log("loopReady")
		loopStatus = true;
		loop.play();
	}
}
