function setup() {
  createCanvas(640, 480);
  background(255);
}

function draw() {
	var h = hour();
	var m = minute();
	var s = second();

	// this is clock 01 : triangle clock

	fill(0)
	strokeWeight(0);
	textSize(12);
	text(h, 30, 30);
	text(':', 50, 30);
	text(m, 80, 30);
	text(':', 110, 30);
	text(s, 140, 30);

	fill(0);
	ellipse(98, 60, 5, 5);

	var color_opacity = map(s, 0, 60, 255, 0);
	
	fill(color_opacity);
	strokeWeight(0)
	triangle(70,115,98,60,126,115);


	if (m<=20){
		line(98, 60, 98 + (28/20)*m, 60 + (55/20)*m);
	} else if (20<<m<=40){
		strokeWeight(3);
		line(98,60,126,115);
		line(126, 115, 126 - (56/20)*m, 115);
	} else {
		strokeWeight(3);
		line(98,60,126,115);
		line(126,115,70,115);
		line(70, 115, 70 + (28/20)*(m-40), 115 - (55/20)*(m-40));
	}





}
