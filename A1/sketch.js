function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(50,50,255);
	var h = hour();
	text('Hour:\n' + h, 5, 50);
	var m = minute();
	text('Minute:\n'+ m, 5, 100);
	var s = second();
	text('Second:\n'+ s, 5, 150);

}
