function setup() {

	gameScene = g.group();
	soundScene = g.group();

	title = g.text("Space_Game", null, "000000", g.canvas.width / 2, g.canvas.height / 2);
	title.anchor.set(0.5, 0.5);
	title.scale.set(5);
	soundScene.addChild(title);

	let start = g.button([
		"b/start_up.png",
		"b/start_down.png"
	]);

	music = g.sound("music/gameloop.mp3");
	music.loop = true;
	//music.play();

	soundScene.addChild(start);
	start.scale.set(3, 3);
	start.setPosition(g.canvas.width / 2, g.canvas.height / 2 + 200);
	start.anchor.set(0.5, 0.5);

	start.press = function () {
		music.play();
		gameScene.visible = true;
		soundScene.visible = false;
		g.state = play;
	};

	space = g.tilingSprite(
		"art/space.png", //The image to use
		g.canvas.width, //The width
		g.canvas.height, //The height
	);

	gameScene.addChild(space);

	aliens = g.group();
	missiles = g.group();
	meteors = g.group();

	ship = g.sprite("art/space_ship.png");
	gameScene.addChild(ship);
	ship.setPosition(g.canvas.width / 2, g.canvas.height - 450);
	ship.anchor.set(0.5, 0.5);
	ship.scale.set(2, 2)
	//ship.scale.set(10, 10)
	//var shipBreathe = g.breathe(ship, 2, 2, 60, false, 0);

	//let intro = g.sound("music/nightmare_intro.mp3");
	//intro.play();
	//loop = g.sound("music/nightmare_loop.mp3");
	//loopStatus = false;
	//loop.loop = true;

	//speed = 10;

	let left = g.button([
		"b/left_up.png",
		"b/left_down.png"
	]);

	gameScene.addChild(left);
	left.scale.set(3, 3);
	left.setPosition(left.width - left.width / 3, 1750);
	left.anchor.set(0.5, 0.5);

	left.press = function () {
		//console.log("pressed");
		ship.vx = -8;
	};
	left.release = function () {
		//console.log("released");
		if (ship.vx == -8) {
			ship.vx = 0;
		} else {

		}
	};

	let right = g.button([
		"b/right_up.png",
		"b/right_down.png"
	]);

	gameScene.addChild(right);
	right.scale.set(3, 3);
	right.setPosition(g.canvas.width - right.width + right.width / 3, 1750);
	right.anchor.set(0.5, 0.5);

	right.press = function () {
		//console.log("pressed");
		ship.vx = 8;
	};
	right.release = function () {
		//console.log("released");
		if (ship.vx == 8) {
			ship.vx = 0;
		} else {

		}
	};

	let laserSound = g.sound("sfx/laser1.wav");
	//gameScene.addChild(laserSound);

	let shoot = g.button([
		"b/shoot_up.png",
		"b/shoot_down.png"
	]);

	gameScene.addChild(shoot);
	shoot.scale.set(3, 3);
	shoot.setPosition(g.canvas.width / 2, 1750);
	shoot.anchor.set(0.5, 0.5);

	let lastShot = 0

	shoot.press = function () {
		if (timer - lastShot > 0.3) {
			//fire(ship.x, ship.y)
			//now using better spawn command
			spawn(ship.x, ship.y, -15, 1.2, "art/missile.png", missiles, 0.5, 0.5)

			laserSound.play();
			lastShot = timer;
			console.log(lastShot)
		}
	};

	let leftArrow = g.keyboard(37),
		spaceKey = g.keyboard(32),
		rightArrow = g.keyboard(39);

	rightArrow.press = function () {
		//console.log("pressed");
		ship.vx = 8;
	};
	rightArrow.release = function () {
		//console.log("released");
		if (ship.vx == 8) {
			ship.vx = 0;
		}
	};

	leftArrow.press = function () {
		//console.log("pressed");
		ship.vx = -8;
	};
	leftArrow.release = function () {
		//console.log("released");
		if (ship.vx == -8) {
			ship.vx = 0;
		}
	};

	spaceKey.press = function () {
		if (timer - lastShot > 0.3) {
			//fire(ship.x, ship.y)
			//now using better spawn command
			spawn(ship.x, ship.y, -15, 1.2, "art/missile.png", missiles, 0.5, 0.5)

			laserSound.play();
			lastShot = timer;
			console.log(lastShot)
		}
	};

	timer = 0;
	g.state = queSound;
}
