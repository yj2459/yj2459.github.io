function setup() {
  createCanvas(640, 480);
  background(50,50,255);
}

function draw() {

	textSize(32)
	text('WHAT TIME IS IT?', 5, 30)

	var h = hour();
	text('Hour:\n' + h, 5, 50);
	var m = minute();
	text('Minute:\n'+ m, 5, 100);
	var s = second();
	text('Second:\n'+ s, 5, 150);

}
