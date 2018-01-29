function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(0);
	var h = hour();
	var m = minute();
	var s = second();

	var color_opacity = map(s, 0, 100, 0, width)
	fill(0,0,0,color_opacity)
	triangle(30,75,58,20,86,75)

}
