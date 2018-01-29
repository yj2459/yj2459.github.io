function setup() {
  createCanvas(1000, 480);
}

function draw() {
	background(255);
	var h = hour();
	var m = minute();
	var s = second();

	var color_opacity = map(s, 0, 60, 0, 60)
	
	fill(0, 0, 0, 20)
	rect(20, 20, 100, 400)
	rect(140, 20, 500, 400)
	rect(660, 20, 200, 400)

	#these are lines for reference
	var Sline = line(50, 50, 90, 50, 50)
	var Dline = line(50, 390, 90, 390, 50)

	arrayCopy(Sline, Dline, [60])





}
