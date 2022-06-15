function setup() {
	aliens = g.group();
	missles = g.group();

	ship = g.sprite("art/space_ship.png");
	ship.setPosition(540, 1700);
	ship.anchor.set(0.5, 0.5);
	ship.scale.set(2, 2)

	let music = g.sound("music/gameloop.mp3");
	music.loop = true;
	music.play();

	let left = g.button([
		"buttons/left_up.png",
		"buttons/left_down.png"
	]);
	
	left.scale.set(2, 2);
	left.setPosition(left.width + 10, 1750);
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
		"buttons/right_up.png",
		"buttons/right_down.png"
	]);

	right.scale.set(2, 2);
	right.setPosition(g.canvas.width - right.width - 10, 1750);
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
	
	g.state = play;
}