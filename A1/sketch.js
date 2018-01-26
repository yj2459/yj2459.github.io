function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	fill(0);
	textSize(32);
	text('What time is it?', 5, 30);
	textSize(10)
	var h = hour();
	text('Current hour:\n' + h, 5, 30);
	var m = minute();
	text('Current minute:\n'+ m, 5, 80);
	var s = second();
	text('Current second:\n'+ s, 5, 110);
	var clock_hr = map(h, 0, 12, 0, 12)
	var clock_sec = map(s, 0, width, 100, 500);
	var clock_min = map(m, 0, 60, 0, 60);

	rect(100, 50, clock_hr, 25)
	rect(100, 80, clock_min, 25)
	rect(100, 120, clock_sec, 25)

	fill(255,255,0)

	ellipse(width*(2/3), height/2, 250, 250)
	
	fill(255)
	rotate(clock_min / 3.0)
	rect(width*(2/3), height/2, 10, 80)


}
