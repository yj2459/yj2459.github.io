function setup() {
  createCanvas(640, 480);
  
}

function draw() {
	background(50,50,255);
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

	var clock_hr = map(h, 0, 24, 0, 550);
	var clock_min = map(m, 0, 60, 0, 550);
	var clock_sec = map(s, 0, 60, 0, 550);

	rect(100, 50, clock_hr, 10);
	rect(100, 80, clock_min, 10);
	rect(100, 120, clock_sec, 10);

	var sec_rotation = map(s, 0, 60, 0, 2*PI);

	fill(255, 255, 0);
	ellipse(width/2,height/2 + 50, 250, 250);

	fill(0);
	translate(width/2, height/2 + 50);
	rotate(sec_rotation);
	rect(0, height/5, 8, 70);

}
