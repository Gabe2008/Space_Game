let content = [
	"art/alien_1.png",
	"art/missile.png",
	"art/space_ship.png",
	//Old buttons
	"buttons/left_down.png",
	"buttons/left_up.png",
	"buttons/right_down.png",
	"buttons/right_up.png",
	//Sound from Zapsplat.com
	"music/gameloop.mp3",
	//Button Overhaul
	"b/left_down.png",
	"b/left_up.png",
	"b/right_down.png",
	"b/right_up.png",
	"b/shoot_down.png",
	"b/shoot_up.png",

	"art/space.png",
	"sfx/laser1.wav",
	
	"music/nightmare_intro.mp3",
	"music/nightmare_loop.mp3",
	"art/ufo_alien.png",
	"art/boom.png",
	"art/boom2.png",
	"art/meteor1c.png",
	"b/start2_up.png",
	"b/start2_down.png",
	"b/start2_over.png",
	"sfx/8bit_bomb_explosion.wav",
	"font/PetMe64",
	"music/briefing.ogg",
	"art/titleText.png"
];

let g = hexi(1080, 1920, setup, content, load);
g.fps = 60;
g.scaleToWindow();
g.start();

//Declare any variables that need to be used in more than one function
let ship, aliens, missiles, meteors, score, timer,loopStatus, loop, speed, gameScene, music, title, explosion1, explosion2, menuMusic;
