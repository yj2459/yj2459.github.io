function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	var h = hour();
	text('Current hour:\n' + h, 5, 20);
	var m = minute();
	text('Current minute:\n'+ m, 5, 60);
	var s = second();
	text('Current second:\n'+ s, 5, 100);
	var clock_sec = map(s, 0, width, 100, 500)

	rect(25, 25, 100, clock_sec * 3)
	fill(255,255,0)
	ellipse(260, 25, clock_sec * 2)
}
