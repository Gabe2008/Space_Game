

let content = [
	"art/alien_1.png",
	"art/missile.png",
	"art/space_ship.png",
	"buttons/left_down.png",
	"buttons/left_up.png",
	"buttons/right_down.png",
	"buttons/right_up.png",
	//Sound from Zapsplat.com
	"music/gameloop.mp3"
];

let g = hexi(1080, 1920, setup, content, load);
g.fps = 60;
g.scaleToWindow();
g.start();

//Declare any variables that need to be used in more than one function
let aliens, missles, score;