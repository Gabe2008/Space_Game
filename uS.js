let numbers = [
	"N/0.png",
	"N/1.png",
	"N/2.png",
	"N/3.png",
	"N/4.png",
	"N/5.png",
	"N/6.png",
	"N/7.png",
	"N/8.png",
	"N/9.png"
];

function uS(i1,i2,i3,i4,i5) {
	
	points.children.forEach(n => {
		n.visible = false;
	});
	n1 = g.sprite(numbers[i1]);
	n2 = g.sprite(numbers[i2]);
	n3 = g.sprite(numbers[i3]);
	n4 = g.sprite(numbers[i4]);
	n5 = g.sprite(numbers[i5]);
	points.addChild(n1)
	points.addChild(n2)
	points.addChild(n3)
	points.addChild(n4)
	points.addChild(n5)
	//n1.visible = false;
	//n2.visible = false;
	//n3.visible = false;
	points.children.forEach(n => {
		n.width = 100
		n.height = 100
	});
	n1.x = 	g.canvas.width - (n1.width*5)
	n2.x = 	g.canvas.width - (n2.width*4)
	n3.x = 	g.canvas.width - (n3.width*3)
	n4.x = 	g.canvas.width - (n2.width*2)
	n5.x = 	g.canvas.width - (n3.width*1)
}
