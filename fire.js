function fire(x, y) {
	let missile = g.sprite("art/missile.png");
	missile.setPosition(x, y);
	missile.vy = -15;
	missile.anchor.set(0.5, 0.5);
	missiles.addChild(missile);
}

//switched to spawn.js