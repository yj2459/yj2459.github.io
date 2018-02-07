function setup() {
  createCanvas(640, 480);
  background(255);
}

function draw() {

 	var R = 200;
 	var a = (sqrt(3)*R)/3;
 	var cx = width/2;
 	var cy = height/2;

 	// Draw a circle
 	push();
 	strokeWeight(0.3);
	ellipse(cx, cy, R, R);
	pop();

	//SECOND
	//Define angle
	var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
	//Set coordinates
	var angle1 = s, angle2 = s + (1/6)*PI, angle3 = s - PI;
	var x1 = cx + sin(angle1)*R, y1 = cy + cos(angle1)*R;
	var x2 = cx + cos(angle2)*R, y2 = cy - sin(angle2)*R;
	var x3 = cx - cos(angle3)*R, y3 = cy + sin(angle3)*R;

	//Draw lines
	push();
	fill(151, 108, 193, 2);
	noStroke()
	triangle(x1, y1, x2, y2, x3, y3);
	strokeWeight(0.3);
	stroke(151, 108, 193);
	line(x1,y1,x2,y2);
	line(x2,y2,x3,y3);
	line(x3,y3,x1,y1);
	pop();

	if (second()==59) {
		background(255);
	}

	//MINUTE
	//Put color opacity
	push();
	var color_opacity = map(minute(), 0, 60, 255, 0);
	fill(color_opacity);
	noStroke();
	ellipse(cx, cy, R, R);
	pop();

	//HOURS
	push();
	var h = map(hour(), 0, 24, 0, TWO_PI*2) - HALF_PI;
	strokeWeight(7)
	stroke(242, 56, 96)
	line(cx,cy,cx + (cos(h)*R)/1.5, cy + (sin(h)*R)/1.5);
	pop();



}