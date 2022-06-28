//Sprite Spawn Variables

let ufoSpawn = 0
let ufoInterval = 2

let a1Spawn = 0
let a1Int = 3

let meteorSpawn = 0
let meteorI = 0

let pointUp = 1
let s1 = 0
let s2 = 0
let s3 = 0
let s4 = 0
let s5 = 0

function play() {
	//Create Score Counter
	if (timer - pointUp > 1) {
		pointUp = timer;
		//s5 += 1
	}
	if (s5 == 10) {
		s5 = 0
		s4 = +1
	}
	if (s4 == 10) {
		s4 = 0
		s3 = +1
	}
	if (s3 == 10) {
		s3 = 0
		s2 = +1
	}
	if (s2 == 10) {
		s2 = 0
		s1 = +1
	}
	if (s1 == 10) {
		s1 = 9
		s2 = 9
		s3 = 9
		g.state = end;

	}
	//console.log(s1,s2,s3)
	uS(s1, s2, s3, s4, s5);

	//console.log(ship.vx);

	//Update Ship
	g.move(ship);
	let shipScreen = g.contain(ship, g.stage, false);

	//Update Missile
	missiles.children.forEach(missile => {
		g.move(missile);
	});

	//Update Meateors
	meteors.children.forEach(meteor => {
		g.move(meteor);
		let shipHit1 = g.hit(meteor, ship)
		if (shipHit1) {
			g.state = end;
		}

		/*g.createParticles(
			meteor.x, //The particle’s starting x position
			meteor.y -5, //The particle’s starting y position
			() => g.sprite("art/boom.png"), //Particle function
			g.stage, //The container group to add it to
			2, //Number of particles
			-0.3, //Gravity
			true, //Random spacing
			0, 6.28, //Min/max angle
			20, 60, //Min/max size
			1, 4, //Min/max speed
			0.005, 0.01, //Min/max scale speed
			0.005, 1, //Min/max alpha speed
			0.05, 0.1 //Min/max rotation speed
		);*/

		missiles.children.forEach(missile => {
			let missileHit2 = g.hit(meteor, missile)
			if (missileHit2) {
				explosion2.pan = (meteor.x - 540) / 540;
				explosion2.volume = 2;
				explosion2.play();
				console.log("hit2")
				//aliens.removeChild(alien);
				missiles.removeChild(missile);
				//alien.destroy;
				missile.destroy;

				g.createParticles(
					meteor.x, //The particle’s starting x position
					meteor.y + meteor.width, //The particle’s starting y position
					() => g.sprite("art/boom2.png"), //Particle function
					g.stage, //The container group to add it to
					10, //Number of particles
					0.3, //Gravity
					true, //Random spacing
					0, 6.28, //Min/max angle
					20, 60, //Min/max size
					1, 4, //Min/max speed
					0.005, 0.1, //Min/max scale speed
					0.005, 0.01, //Min/max alpha speed
					0.05, 0.1 //Min/max rotation speed
				);

			}
		});
	});


	//Update Aliens
	aliens.children.forEach(alien => {
		g.move(alien);

		if (alien.y > 2000) {
			g.state = end;
		}

		missiles.children.forEach(missile => {
			let missileHit = g.hit(alien, missile)
			if (missileHit) {
				s4 += 1
				explosion1.pan = (alien.x - 540) / 540;
				explosion1.volume = 2;
				explosion1.play();
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
					10, //Number of particles
					0.1, //Gravity
					true, //Random spacing
					0, 6.28, //Min/max angle
					20, 50, //Min/max size
					1, 4, //Min/max speed
					0.005, 0.01, //Min/max scale speed
					0.01, 0.015, //Min/max alpha speed
					0.05, 0.1 //Min/max rotation speed
				);

			}
		});
	});


	//Move Background
	space.tileY += 10;

	//Increment timer (60 FPS)
	timer += 1 / 60;

	//Random Spawn Time
	if (timer - ufoSpawn > ufoInterval) {
		spawn(random(100, 980, true), -200, 6, 300, 300, "art/ufo_alien.png", aliens, 0.5, 0.5)
		ufoSpawn = timer;
		ufoInterval = random(0, 3, false);
		//console.log(ufoSpawn);
	}

	if (timer - a1Spawn > a1Int) {
		spawn(random(100, 980, true), -200, 5, 100, 100, "art/alien_1.png", aliens, 0.5, 0.5)
		a1Spawn = timer;
		a1Int = random(2, 4, false);
	}

	if (timer - meteorSpawn > meteorI) {
		spawn(random(100, 980, true), -200, 8, 100, 100, "art/meteor1c.png", meteors, 0.5, 0)
		meteorSpawn = timer;
		meteorI = random(0, 6, false);
	}


}
