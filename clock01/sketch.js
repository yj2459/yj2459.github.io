function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(255);
	var h = hour();
	var m = minute();
	var s = second();

	var color_opacity = map(s, 0, 60, 0, 60)
	fill(0,0,0,color_opacity)
	triangle(30,75,58,20,86,75)

}
