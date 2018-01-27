function setup() {
  createCanvas(640, 480);
  background(50,50,255);
}

function draw() {
	textSize(32);
	textStyle(BOLD);
	text('What Time Is It?', 5, 25);

	textSize(10);
	var h = hour();
	text('Hour:\n' + h, 5, 50);
	var m = minute();
	text('Minute:\n'+ m, 5, 100);
	var s = second();
	text('Second:\n'+ s, 5, 150);

	var clock_hr = map(h, 0, width, 0, width);
	var clock_min = map(m, 0, width, 0, 6);
	var clock_sec = map(s, 0, width, 0, 100);

	rect(100, 50, clock_hr, 25);
	rect(100, 80, clock_min, 25);
	rect(100, 120, clock_sec, 25);

	push();
	fill(255, 255, 0);
	translate(width*(2/3), height/2);
	ellipse(150, 150, 500, 500);
	pop();

	push();
	fill(255);
	rotate(clock_sec, 3.0);
	rect(150, 150, 8, 80);
	pop();
}
