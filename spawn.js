function spawn(x, y, vy, scale, texture, group) {
	let sprite = g.sprite(texture);
	sprite.setPosition(x, y);
	sprite.vy = vy;
	sprite.anchor.set(0.5, 0.5);
	sprite.scale.set(scale,scale)
	group.addChild(sprite);
}