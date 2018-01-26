function setup() {
  createCanvas(640, 480);
}

function draw() {
	var h = hour();
	text('Current hour:\n' + h, 5, 50);
}
