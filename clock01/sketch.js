function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(255);
	var h = hour();
	var m = minute();
	var s = second();

	// this is clock 01

	text(h, 30, 30);
	text(':', 50, 30);
	text(m, 80, 30);
	text(':', 110, 30);
	text(s, 140, 30);

	var color_opacity = map(s, 0, 60, 255, 0);

	fill(0);
	ellipse(98, 60, 5, 5);

	fill(color_opacity);
	triangle(70,115,98,60,126,115);


	// var line_1 = line(98, 60, 126, 115);
	// var line_2 = line(126, 115, 70, 115);
	// var line_3 = line(70, 115, 98, 60);
	// var line = line_1 + line_2 + line_3

	var min = map(m, 0, 20, line(98,60,98,60), line(98,60,126,115));


	stoke(min);
	strokeWeight(3);
	noFill()
	triangle(70,115,98,60,126,115);

	// strokeWeight(3)
	// line(98, 60, 126, 115);
	// line(126, 115, 70, 115);
	// line(70, 115, 98, 60);


}
