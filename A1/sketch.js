function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	textSize(32)
	textStyle(Bold);
	text('WHAT TIME IS IT?', 5, 30)

	textSize(10);
	var h = hour();
	text('Hour:\n' + h, 5, 50);
	var m = minute();
	text('Minute:\n'+ m, 5, 100);
	var s = second();
	text('Second:\n'+ s, 5, 150);

}
