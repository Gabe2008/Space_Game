function end() {
	gameScene.visible = false;
	soundScene.visible = false;
	endScene.visible = true;
	music.fadeOut(1);
	music.pause();
}
