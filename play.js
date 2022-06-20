let ufoSpawn = 0

function play() {
	//console.log(ship.vx);
	g.move(ship);
	let shipScreen = g.contain(ship, g.stage, false);

	missiles.children.forEach(missile => {
		g.move(missile);
	});

	//console.log(aliens.children)
	aliens.children.forEach(sprite => {
		g.move(sprite);

		missiles.children.forEach(missile => {
			let missileHit = g.hit(sprite, missile)
			if (missileHit) {
				console.log("hit")
				sprite.vy = 0;
				missile.vy = 0;
				
				aliens.removeChild(sprite);
				missiles.removeChild(missile);
				sprite.destroy;
				missile.destroy;

				g.createParticles(
					sprite.x, //The particle’s starting x position
					sprite.y, //The particle’s starting y position
					() => g.sprite("art/boom.png"), //Particle function
					g.stage, //The container group to add it to
					20, //Number of particles
					0.1, //Gravity
					true, //Random spacing
					0, 6.28, //Min/max angle
					12, 24, //Min/max size
					1, 2, //Min/max speed
					0.005, 0.01, //Min/max scale speed
					0.005, 0.01, //Min/max alpha speed
					0.05, 0.1 //Min/max rotation speed
				);

			}
		});
	});

	space.tileY += speed;
	timer += 1 / 60;
	//console.log(Math.floor(timer));

	if (timer - ufoSpawn > 2) {
		spawn(random(100,980), 0, 6, 3, "art/ufo_alien.png", aliens)
		ufoSpawn = timer;
		console.log(ufoSpawn);
	}

}
