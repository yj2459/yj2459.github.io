function setup() {
  createCanvas(640, 480);

}

function draw() {
	//this is clock 01 : triangle clock
	background(255);

	var h = hour();
	var m = minute();
	var s = second();

	//circle
 	push();
 	noFill();
 	strokeWeight(0.3);
 	stroke(0);
 	ellipse(100, 100, (68*sqrt(3)), (68*sqrt(3)))
 	pop();

 	//rotate
 	push();
	translate(100, 100);
	angleMode(DEGREES);
	rotate(map(h,0,24,0,360));
	drawTriangle(50);
	pop();

	//time text
	push();
  	fill(map(s,0,60,0,255));
	strokeWeight(0);
	textSize(10);
	//text(h + ':' + m + ':' + s, 100, 100);
	text('H ' + h, 90, 85);
	text('M ' + m, 90, 100);
	text('S ' + s, 90, 115);
	pop();

}

function drawTriangle(a) {
	var h = hour();
	var m = minute();
	var s = second();
	var x1 = (-1)*a, x2 = 0, x3 = a;
	var y1 = (sqrt(3)/3)*a, y2 = ((-2)*sqrt(3)/3)*a, y3 = (sqrt(3)/3)*a;

	//second
	push();
	var color_opacity = map(s, 0, 60, 255, 0);
	fill(color_opacity);
	strokeWeight(0);
	triangle(x1, y1, x2, y2, x3, y3);
	pop();


	//minute
	push();
	if (m>0 && m<=20){
		// if (0<m<=20){
		//for (var i = 0; i<=20; i++){
		strokeWeight(5);
		line(x2, y2, x2 + ((x2-x1)/20)*m, y2 + ((y1-y2)/20)*m);
		//}
	} else if (m>20 && m<=40){
		// (20<m<=40){
		//for (var i = 21; i<=40; i++){
		strokeWeight(5);
		line(x2,y2,x3,y3);
		line(x3, y3, x3 - ((x3-x1)/20)*m, y3);
		//}
	} else {
		//for (var i = 41; i<=60; i++){
		strokeWeight(5);
		line(x2, y2, x3, y3);
		line(x3, y3, x1, y1);
		line(x1, y1, x1 + ((x2-x1)/20)*(m-40), y1 - ((y1-y2)/20)*(m-40));
		//}
	}
	pop();

	//hourpoint
	push();
	fill(255, 20, 250);
	noStroke()
	ellipse(x2, y2, 7, 7);
	pop();
}