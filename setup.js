function setup() {
	//Scrolling Background
	space = g.tilingSprite(
		"art/space.png", //The image to use
		g.canvas.width, //The width
		g.canvas.height, //The height
	);

	//Create Groups
	gameScene = g.group();
	startScene = g.group();
	endScene = g.group();
	aliens = g.group();
	missiles = g.group();
	meteors = g.group();
	gameScene.addChild(aliens);
	gameScene.addChild(missiles);
	gameScene.addChild(meteors);

	//Variables
	let lastShot = 0
	timer = 0;

	//Sounds
	let laserSound = g.sound("sfx/laser1.wav");
	music = g.sound("music/gameloop.mp3");
	music.loop = true;
	music.volume = 0.4;
	menuMusic = g.sound("music/briefing.ogg");
	menuMusic.loop = true;
	menuMusic.volume = 0.7;
	menuMusic.play();
	menuMusic.fadeIn(0.5);
	explosion1 = g.sound("sfx/8bit_bomb_explosion.wav");
	explosion2 = g.sound("sfx/sfx_boom6.wav");

	//Start Screen
	title = g.sprite("art/titleText.png");
	title.setPosition(g.canvas.width / 2, g.canvas.height / 2);
	title.anchor.set(0.5, 0.5);
	title.scale.set(2);
	let titlePulse = g.pulse(title, 60, 0);
	startScene.addChild(title);

	let start = g.button([
		"b/start2_up.png",
		"b/start2_over.png",
		"b/start2_down.png"
	]);

	start.scale.set(1.7, 1.7);
	start.setPosition(g.canvas.width / 2, g.canvas.height / 2 + 2000);
	start.anchor.set(0.5, 0.5);
	let startSlide = g.slide(start, start.x, g.canvas.height / 2 + 200, 120, "bounce 5 -5", false, 0);

	start.release = function () {
		menuMusic.fadeOut(0.5);
		music.play();
		music.fadeIn(1);
		gameScene.visible = true;
		startScene.visible = false;
		g.state = play;
		start.x = 10000000000;
	};
	startScene.addChild(start);

	//Ship
	ship = g.sprite("art/space_ship.png");
	gameScene.addChild(ship);
	ship.setPosition(g.canvas.width / 2, g.canvas.height - 150);
	ship.anchor.set(0.5, 0.5);
	ship.scale.set(2, 2)

	//Keyboard
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

	//Start Game
	g.state = startg;
}
