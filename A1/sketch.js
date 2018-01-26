function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	var h = hour();
	text('Current hour:\n' + h, 5, 50);
	var m = minute();
	text('Current minute:\n'+ m, 5, 60);
	var s = second();
	text('Current second:\n'+ s, 5, 70);

	ellipse(300, 300, 100, 100)

	var clock_sec = map(s, 0, width, 100, 500)
	rect(clock_sec, 25, 25, 25)
}
