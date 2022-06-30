//let endState = false

function end() {
	start.x = 10000000000;
	//if (endState == false) {
		//endState = true
	//}
	space.tileY += 5;
	gameScene.visible = false;
	startScene.visible = false;
	endScene.visible = true;
	meteors.children.forEach(meteor => {
		g.move(meteor);
		if (meteor.y > 2000) {
			meteors.removeChild(meteor);
			meteor.destroy;
		}
	});

	aliens.children.forEach(alien => {
		g.move(alien);
		if (alien.y > 2000) {
			aliens.removeChild(alien);
			alien.destroy;
		}
	});
	
	dosp.children.forEach(p => {
		g.move(p);

		if (p.y > 2000) {
			dosp.removeChild(p);
			p.destroy;
		}
	});
	//uS(s1, s2, s3, s4, s5);
	/*points.children.forEach(n => {
		n.width = 200
		n.height = 200
		n.y = (g.canvas.height / 2) - (n.height / 2) - 500
	});
	n3.x = (g.canvas.width / 2) - (n3.width / 2)
	n2.x = (g.canvas.width / 2) - ((n2.width / 2) - n2.width * 1)
	n1.x = (g.canvas.width / 2) - ((n1.width / 2) - n1.width * 2)
	n4.x = (g.canvas.width / 2) - ((n4.width / 2) + n4.width * 1)
	n5.x = (g.canvas.width / 2) - ((n4.width / 2) + n5.width * 2)
	*/
}
