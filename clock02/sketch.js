function setup() {
  createCanvas(1000, 480);
}

function draw() {
	background(255);
	var h = hour();
	var m = minute();
	var s = second();

	// 2nd clock

	var color_opacity1 = map(s, 0, 60, 255, 0)
	var color_opacity2 = map(s, 0, 60, 234, 24)
	var color_opacity3 = map(s, 0, 60, 235, 66)

	fill(color_opacity1)
	rect(20, 20, 100, 400)
	fill(color_opacity2)
	rect(140, 20, 500, 400)
	fill(color_opacity3)
	rect(660, 20, 200, 400)

	// line(50, 50, 90, 50, 50)

	// var Sline = line(50, 50, 90, 50, 50)
	// var Dline = line(50, 390, 90, 390, 50)
	// arrayCopy(Sline, Dline, [60])







}
