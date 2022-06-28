let content = [
	//Art by Gabriel and Luke Vesperman
	"art/alien_1.png",
	"art/missile.png",
	"art/space_ship.png",
	"art/ufo_alien.png",
	"art/boom.png",
	"art/boom2.png",
	"art/meteor1c.png",
	//Old Mobile Buttons
	"buttons/left_down.png",
	"buttons/left_up.png",
	"buttons/right_down.png",
	"buttons/right_up.png",
	//Music from Zapsplat.com
	"music/gameloop.mp3",
	//New Mobile Buttons
	"b/left_down.png",
	"b/left_up.png",
	"b/right_down.png",
	"b/right_up.png",
	"b/shoot_down.png",
	"b/shoot_up.png",
	//Space Background by Pavel Kutejnikov
	"art/space.png",
	//Sound by Dklon
	"sfx/laser1.wav",
	"sfx/sfx_boom6.wav",
	//Music by Shadow Trait
	"music/nightmare_intro.mp3",
	"music/nightmare_loop.mp3",
	//Font is NAVILL
	"b/start2_up.png",
	"b/start2_down.png",
	"b/start2_over.png",
	"art/titleText.png",
	//Sound by Luke.RUSTLTD
	"sfx/8bit_bomb_explosion.wav",
	//Music by congusbongus
	"music/briefing.ogg",
];

let g = hexi(1080, 1920, setup, content, load);
g.fps = 60;
g.scaleToWindow();
g.start();

//Declare any variables that need to be used in more than one function
let ship, aliens, missiles, meteors, score, timer, loopStatus, loop, speed, gameScene, music, title, explosion1, explosion2, menuMusic;
