function setup() {
  createCanvas(640, 480);
}

function draw() {
	var h = hour();
	text('Current hour:\n' + h, 5, 50);
	var m = minute();
	text('Current minute:\n'+ m, 5, 100);
	var s = second();
	text('Current second:\n'+ s, 5, 150);

}
