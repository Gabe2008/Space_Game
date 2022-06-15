function play() {
	//console.log(ship.vx);
	ship.x += ship.vx;
	let collision = g.contain(ship, g.stage, false);
}