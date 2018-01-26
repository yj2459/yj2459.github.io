function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	fill(0);
	textSize(32);
	textStyle(Bold);
	text('What time is it?', 5, 30);
	textSize(10)
	var h = hour();
	text('Hour:\n' + h, 5, 70);
	var m = minute();
	text('Minute:\n'+ m, 5, 100);
	var s = second();
	text('Second:\n'+ s, 5, 130);
	var clock_hr = map(h, 0, width, 0, 100)
	var clock_min = map(m, 0, width, 0, 100);
	var clock_sec = map(s, 0, width, 0, 100);

	rect(100, 50, clock_hr, 25)
	rect(100, 80, clock_min, 25)
	rect(100, 120, clock_sec, 25)

	fill(255,255,0)

	translate(width*(2/3), height/2)
	ellipse(150, 150, 500)
	
	fill(255)
	rotate(clock_sec / 0.0)
	rect(150, 150, 8, 80)


}
