let content = [
	//Art by Gabriel and Luke Vesperman
		"art/alien_1.png",
		"art/missile.png",
		"art/space_ship.png",
		"art/ufo_alien.png",
		"art/boom.png",
		"art/boom2.png",
		"art/meteor1c.png",
		"art/2x.png", //Arial
	//Old Mobile Buttons
		//"buttons/left_down.png",
		//"buttons/left_up.png",
		//"buttons/right_down.png",
		//"buttons/right_up.png",
	//Music from Zapsplat.com
		//"music/gameloop.mp3",
	//Music by congusbongus
		//"music/briefing.ogg",
	//New Mobile Buttons
		//"b/left_down.png",
		//"b/left_up.png",
		//"b/right_down.png",
		//"b/right_up.png",
		//"b/shoot_down.png",
		//"b/shoot_up.png",
	//Space Background by Pavel Kutejnikov
		"art/space.png",
	//Sound by Dklon
		"sfx/laser1.wav",
		"sfx/sfx_boom6.wav",
	//Music by Shadow Trait
		"music/nightmare_intro.mp3",
		"music/nightmare_loop.mp3",
	//Font is NAVILL
	//Title Screen
		"b/start2_up.png",
		"b/start2_down.png",
		"b/start2_over.png",
		"art/titleText.png",
	//Score
		"N/0.png",
		"N/1.png",
		"N/2.png",
		"N/3.png",
		"N/4.png",
		"N/5.png",
		"N/6.png",
		"N/7.png",
		"N/8.png",
		"N/9.png",
		"art/score.png",
	//Sound by Luke.RUSTLTD
		"sfx/8bit_bomb_explosion.wav",
	//Music by tarush Singhal
		//"music/desertvibes.mp3",
	//Music by iamoneabe
		//"music/starfish.mp3",
	//Effect by Dawith
		"sfx/zipclick.mp3",
	//Effect by Arthur
		//"sfx/whoosh.wav",
	//Loop by Brandon Morris
		"music/LSL.wav",
	//By Alexandr Zhelanov
		"music/ALEX.mp3",
	//Music by Chinchilete
		"music/Synthmania.wav",
	//Effect by Fupi
		"sfx/coin.wav",
	//Effect by cristoph
		//"sfx/clock.ogg",
];

let g = hexi(1080, 1920, setup, content, load);
g.fps = 60;
g.scaleToWindow();
g.start();

//Declare any variables that need to be used in more than one function
let ship, aliens, missiles, meteors, score, timer, loopStatus, loop, gameScene, music, title, explosion1, explosion2, menuMusic, n1, n2, n3, speed, lMusic, scoreT, start, dosp, coine, dosIND;
let s1 = 0
let s2 = 0
let s3 = 0
let s4 = 0
let s5 = 0
