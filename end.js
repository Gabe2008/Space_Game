function end() {
	gameScene.visible = false;
	soundScene.visible = false;
	endScene.visible = true;
	music.fadeOut(3);
	music.pause();
}
