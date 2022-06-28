function end() {
	space.tileY += 5;
	gameScene.visible = false;
	startScene.visible = false;
	endScene.visible = true;
	music.fadeOut(1);
	music.pause();
}
