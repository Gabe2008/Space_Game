function spawn(x, y, vy, scale, texture, group, ax, ay) {
	let sprite = g.sprite(texture);
	sprite.setPosition(x, y);
	sprite.vy = vy;
	sprite.anchor.set(ax, ay);
	sprite.scale.set(scale,scale)
	group.addChild(sprite);
}