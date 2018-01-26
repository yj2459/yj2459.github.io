function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	fill(0)
	textSize(32)
	text('What time is it?', 5, 10)
	var h = hour();
	text('Current hour:\n' + h, 5, 30);
	var m = minute();
	text('Current minute:\n'+ m, 5, 70);
	var s = second();
	text('Current second:\n'+ s, 5, 110);
	var clock_sec = map(s, 0, width, 100, 500)
	var clock_min = map(m, 0, 60, 0, 60)

	rect(25, 100, 25, clock_sec * 5)
	fill(255,255,0)

	ellipse(width*(2/3), height/2, 250, 250)
	
	fill(255)
	rotate(clock_min / 3.0)
	rect(width*(2/3), height/2, 10, 80)


}
