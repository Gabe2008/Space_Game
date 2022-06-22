let ufoSpawn = 0
let ufoInterval = 2

let a1Spawn = 0
let a1Int = 3

let meteorSpawn = 0
let meteorI = 0

function play() {
	//console.log(ship.vx);
	g.move(ship);
	let shipScreen = g.contain(ship, g.stage, false);

	missiles.children.forEach(missile => {
		g.move(missile);
	});

	meteors.children.forEach(meteor => {
		g.move(meteor);

		g.createParticles(
			meteor.x, //The particle’s starting x position
			meteor.y, //The particle’s starting y position
			() => g.sprite("art/boom.png"), //Particle function
			g.stage, //The container group to add it to
			1, //Number of particles
			-0.3, //Gravity
			true, //Random spacing
			0, 6.28, //Min/max angle
			20, 60, //Min/max size
			1, 4, //Min/max speed
			0.005, 0.01, //Min/max scale speed
			0.005, 0.1, //Min/max alpha speed
			0.05, 0.1 //Min/max rotation speed
		);

		missiles.children.forEach(missile => {
			let missileHit2 = g.hit(meteor, missile)
			if (missileHit2) {
				console.log("hit2")
				//aliens.removeChild(alien);
				missiles.removeChild(missile);
				//alien.destroy;
				missile.destroy;

				g.createParticles(
					meteor.x, //The particle’s starting x position
					meteor.y, //The particle’s starting y position
					() => g.sprite("art/boom2.png"), //Particle function
					g.stage, //The container group to add it to
					10, //Number of particles
					0.3, //Gravity
					true, //Random spacing
					0, 6.28, //Min/max angle
					20, 60, //Min/max size
					1, 4, //Min/max speed
					0.005, 0.01, //Min/max scale speed
					0.005, 0.01, //Min/max alpha speed
					0.05, 0.1 //Min/max rotation speed
				);

			}
		});
	});

	//console.log(aliens.children)
	aliens.children.forEach(alien => {
		g.move(alien);

		missiles.children.forEach(missile => {
			let missileHit = g.hit(alien, missile)
			if (missileHit) {
				console.log("hit")
				aliens.removeChild(alien);
				missiles.removeChild(missile);
				alien.destroy;
				missile.destroy;

				g.createParticles(
					alien.x, //The particle’s starting x position
					alien.y, //The particle’s starting y position
					() => g.sprite("art/boom.png"), //Particle function
					g.stage, //The container group to add it to
					20, //Number of particles
					0.1, //Gravity
					true, //Random spacing
					0, 6.28, //Min/max angle
					40, 100, //Min/max size
					1, 4, //Min/max speed
					0.005, 0.01, //Min/max scale speed
					0.005, 0.01, //Min/max alpha speed
					0.05, 0.1 //Min/max rotation speed
				);

			}
		});
	});

	space.tileY += 10;
	timer += 1 / 60;
	//console.log(Math.floor(timer));

	if (timer - ufoSpawn > ufoInterval) {
		spawn(random(100, 980, true), 0, 6, 3, "art/ufo_alien.png", aliens, 0.5, 0.5)
		ufoSpawn = timer;
		ufoInterval = random(0, 3, false);
		//console.log(ufoSpawn);
	}

	if (timer - a1Spawn > a1Int) {
		spawn(random(100, 980, true), 0, 5, 1.2, "art/alien_1.png", aliens, 0.5, 0.5)
		a1Spawn = timer;
		a1Int = random(2, 4, false);
	}

	if (timer - meteorSpawn > meteorI) {
		spawn(random(100, 980, true), 0, 8, 1, "art/meteor1c.png", meteors, 0.5, 0)
		meteorSpawn = timer;
		meteorI = random(0, 6, false);
	}


}
