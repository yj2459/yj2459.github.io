function setup() {
  createCanvas(640, 480);
  background(255);
}

function draw() {
	// this is clock 01 : triangle clock
	var h = hour();
	var m = minute();
	var s = second();

	//time text
	fill(0)
	strokeWeight(0);
	textSize(12);
	text(h + ':' + m + ':' + s, 30, 30);

	// drawTriangle(70, 115, 98, 60, 126, 115);

	for (var i=0; i<24; i++){
		rotate((PI*i)/24);
		drawTriangle(70, 115, 98, 60, 126, 115);
	}
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
	var h = hour();
	var m = minute();
	var s = second();

	//second
	var color_opacity = map(s, 0, 60, 255, 0);
	fill(color_opacity);
	strokeWeight(0)
	triangle(x1, y1, x2, y2, x3, y3);

	//minute
	if (0<m<=20){
		for (var i = 0; i<=20; i++){
		strokeWeight(5);
		line(x2, y2, x2 + ((x2-x1)/20)*i, y2 + ((y1-y2)/20)*i);	
		}
	} else if (20<m<=40){
		for (var i = 21; i<=40; i++){
		strokeWeight(5);
		line(x2,y2,x3,y3);
		line(x3, y3, x3 - ((x3-x1)/20)*i, y3);	
		}
	
	} else {
		for (var i = 41; i<=60; i++){
		strokeWeight(5);
		line(x2, y2, x3, y3);
		line(x3, y3, x1, y1);
		line(x1, y1, x1 + ((x2-x1)/20)*(i-40), y1 - ((y1-y2)/20)*(i-40));
		}
	}


	//hour
	//hourpoint
	fill(255, 20, 250);
	noStroke()
	ellipse(x2, y2, 7, 7);


	// //hour rotation
	// var hour_rotation = m(h, 0, 24, 0, 2*PI)
	// rotate(hour_rotation)
}
