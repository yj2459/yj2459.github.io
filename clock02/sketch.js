function setup() {
  createCanvas(1000, 480);
}

function draw() {
	background(255);
	var h = hour();
	var m = minute();
	var s = second();

	var color_opacity = map(s, 0, 60, 0, 60)
	
	fill(0, 0, 0, 50)
	rect(20, 20, 100, 400)
	rect(140, 20, 500, 400)
	rect(660, 20, 200, 400)

}
