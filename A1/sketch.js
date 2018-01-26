function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	text('What time is it?', 5, 10)
	var h = hour();
	text('Current hour:\n' + h, 5, 30);
	var m = minute();
	text('Current minute:\n'+ m, 5, 70);
	var s = second();
	text('Current second:\n'+ s, 5, 110);
	var clock_sec = map(s, 0, width, 100, 500)
	var clock_min = map(m, 0, width, 0, width)

	rect(25, 100, 100, clock_sec * 10)
	fill(255,255,0)

	ellipse(width*(2/3), height/2, 100, 100)
	
	rotate(clock_min / 0.0)
	rect(width*(2/3), height/2, 10, 80)


}
