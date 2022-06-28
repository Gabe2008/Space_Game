function spawn(x, y, vy, w, h, texture, group, ax, ay) {
	let sprite = g.sprite(texture);
	sprite.setPosition(x, y);
	sprite.vy = vy;
	sprite.anchor.set(ax, ay);
	sprite.height = h;
	sprite.width = w;
	group.addChild(sprite);
}