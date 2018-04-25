var table_pre;
var griefData;
var preDeterminants = [];
var totalP = [];
var totalB = [];
var totalC = [];
var totalT = [];
var totalF = [];
var total = [];
var sum;
var sumP, sumB, sumC, sumT, sumF;

var x = 370;
var y = 680;
var l = 340;

//objects
var a = 1380;
var b = 300;
var pre = {
"Are you atheist?" : [a, b],
"Are you less than 46 years olds?" : [a, b + 80],
"Are you male?" : [a, b+160],
"Have you educated less than 12 years?" : [a, b+240],
"Have you worked for less than 7 years?" : [a, b+320],
"Is the deceased less than 46 years old?" : [a, b+400],
"Is the deceased not an adult child?" : [a, b+480],
"Is the deceased your spouse?" : [a, b+560],
"Is this your first time to lose someone?" : [a, b+640],
"Was it suddenly happened without forewarning?" : [a, b+720],
};

var c = 988;
var subscales = {
"Physiological" : [c, 440],
"Behavioral" : [c, 550],
"Cognitive" : [c, 660],
"Attitudes toward Deceased" : [c, 770],
"Affective" : [c, 880],
};

//lists
var pre_list = [
"Are you atheist?",
"Are you less than 46 years olds?",
"Are you male?",
"Have you educated less than 12 years?",
"Have you worked for less than 7 years?",
"Is the deceased less than 46 years old?",
"Is the deceased not an adult child?",
"Is the deceased your spouse?",
"Is this your first time to lose someone?",
"Was it suddenly happened without forewarning?",
]


var subscales_list = [
"Physiological",
"Behavioral",
"Cognitive",
"Attitudes toward Deceased",
"Affective"
];




function preload(){
  table_pre = loadTable('pre_grief.csv', 'csv', 'header');
}




function setup() {

  createCanvas(1700, 1200);
  loadData();
  bug = new Jitter();
}




function draw() {
  background(255);


	textSize(11);
	textAlign(CENTER);
	fill(0,100);
	noStroke();
	text("The reality is that you will grieve forever. You will not 'get over' the loss of a loved one; you will heal and you will rebuild yourself around the loss you have suffered. You will be whole again but, you will never be the same. Nor should you be the same, nor would you want to.     - Elizabeth Kubler-Ross and John Kessler", width/2, 10);

	textSize(35);
	textStyle(ITALIC);

	fill(58, 128 + sin(frameCount*0.1) * 128, 188);

	noStroke();
	text("Determinants of Grief Duration", width/2, 90);

	textStyle(NORMAL);
	textSize(15);
	fill(32, 61, 168, 200);
	text("An Exploratory Model and Multivariate Analysis by Carlene Hisgen Nelson", width/2, 130)
	
	textSize(10);
	fill(58, 120, 188, 100);
	text("Copyright. 2018 Yuhwa Jeong.  All rights reserved.", width/2, 150);


	textSize(27);
	textAlign(LEFT);
	textStyle(ITALIC);
	fill(0);
	text("Pre Determinants", width - 260, 230);
	strokeWeight(1);
	stroke(0);
	noFill();
	rect(width - 270, 200, 238, 38);



 	var margin = 10;
 	var rectwidth = 240;



 	//draw everything
 	for (var i = 0; i < preDeterminants.length; i++) {
  	var startXY_i = pre[preDeterminants[i].get(0)];
   	var endXY_i = subscales[preDeterminants[i].get(1)];
  	
  	//lines
  	stroke(58, 120, 188, 50);
  	strokeWeight(map(preDeterminants[i].get(2), 0, 1, 0, 10));
   	line(startXY_i[0], startXY_i[1], endXY_i[0], endXY_i[1]);


   	//points
  	strokeWeight(1);
  	//fill(#fef15e)
  	fill(0);
  	ellipse(startXY_i[0], startXY_i[1], 5, 5);
  	ellipse(endXY_i[0], endXY_i[1], 5, 5);

  
  	//mouseover
  	if (mouseX > startXY_i[0]+40 && mouseX < startXY_i[0]+260 && mouseY > startXY_i[1]-13 && mouseY < startXY_i[1]+13) {
  	//fill(104, 156, 210);
  	fill(58, 96 + sin(frameCount*0.3) * 128, 255);
  	rect(startXY_i[0]+50, startXY_i[1]-13, 245, 26);

  	stroke(24, 43, 135);
  	strokeWeight(map(preDeterminants[i].get(2), 0, 1, 0, 10));
   	line(startXY_i[0], startXY_i[1], endXY_i[0], endXY_i[1]);
	}

	else {
  	stroke(0);
  	fill(0);
  	rect(startXY_i[0] + 50, startXY_i[1]-13, 225, 26);
    }

  }



  	// color circles index
  	noStroke();
	fill(240, 78, 127, 240);
	ellipse(width/2, 440, 50, 50)
	fill(134, 99, 171, 240);
	ellipse(width/2, 550, 50, 50)
	fill(77, 124, 190, 240);
	ellipse(width/2, 660, 50, 50)
	fill(128, 205, 190, 240);
	ellipse(width/2, 770, 50, 50)
	fill(250, 173, 86, 240);
	ellipse(width/2, 880, 50, 50)



  //texts from lists
  	for (var j = 0; j < pre_list.length; j++) {
	textStyle(NORMAL);
	textAlign(LEFT);
 	textSize(11);
 	fill(255);
 	noStroke()
  	text(pre_list[j], width-260, 302 + 80*j);
  	}

	for (var j = 0; j < subscales_list.length; j++) {
	textStyle(BOLD);
	textAlign(CENTER);
 	textSize(18);
 	fill(0);
  	text(subscales_list[j], width/2, 443 + 110*j);
  	}






	//radar chart
	//base

	var pointO = (x, y);
	var pointA = (x, y-l);
	var pointB = (x+l*(sin(2*PI/5)), y-l*(cos(2*PI/5)));
	var pointC = (x+l*(sin(PI/5)), y+l*(cos(PI/5)));
	var pointD = (x-l*(sin(PI/5)), y+l*(cos(PI/5)));
	var pointE = (x-l*(sin(2*PI/5)), y-l*(cos(2*PI/5)));

	strokeWeight(0.5);
	stroke(0);
	line(x, y-l, x, y);
	line(x+l*(sin(2*PI/5)), y-l*(cos(2*PI/5)), x, y);
	line(x+l*(sin(PI/5)), y+l*(cos(PI/5)), x, y);
	line(x-l*(sin(PI/5)), y+l*(cos(PI/5)), x, y);
	line(x-l*(sin(2*PI/5)), y-l*(cos(2*PI/5)), x, y);

  	// color circles index
  	noStroke();
	fill(240, 78, 127, 240);
	ellipse(x, y-(l-35), 20, 20);
	fill(134, 99, 171, 240);
	ellipse(x+(l-35)*(sin(2*PI/5)), y-(l-35)*(cos(2*PI/5)), 20, 20);
	fill(77, 124, 190, 240);
	ellipse(x+(l-35)*(sin(PI/5)), y+(l-35)*(cos(PI/5)), 20, 20);
	fill(128, 205, 190, 240);
	ellipse(x-(l-35)*(sin(PI/5)), y+(l-35)*(cos(PI/5)), 20, 20);
	fill(250, 173, 86, 240);
	ellipse(x-(l-35)*(sin(2*PI/5)), y-(l-35)*(cos(2*PI/5)), 20, 20);

  		//Physiological
	var length_P = map(sumP, 0, 4.29, 0, l);
	var pointA_P = (x, y-(length_P));

	//Behavioral
	var length_B = map(sumB, 0, 3.7, 0, l);
	var pointB_B = (x+(length_B)*(sin(2*PI/5)), y-(length_B)*(cos(2*PI/5)));

	//Cognitive
	var length_C = map(sumC, 0, 4.2, 0, l);
	var pointC_C = (x+(length_C)*(sin(PI/5)), y+(length_C)*(cos(PI/5)));

	//Attitudes toward Deceased
	var length_T = map(sumT, 0, 2.57, 0, l);
	var pointD_T = (x-(length_T)*(sin(PI/5)), y+(length_T)*(cos(PI/5)));

	//Affective
	var length_F = map(sumF, 0, 3.26, 0, l);
	var pointE_F = (x-(length_F)*(sin(2*PI/5)), y-(length_F)*(cos(2*PI/5)));	


	strokeWeight(3);
	stroke(0);
	fill(0, 50);
	beginShape();
	vertex(x, y-(length_P));
	vertex(x+(length_B)*(sin(2*PI/5)), y-(length_B)*(cos(2*PI/5)));
	vertex(x+(length_C)*(sin(PI/5)), y+(length_C)*(cos(PI/5)));
	vertex(x-(length_T)*(sin(PI/5)), y+(length_T)*(cos(PI/5)));
	vertex(x-(length_F)*(sin(2*PI/5)), y-(length_F)*(cos(2*PI/5)));
	endShape(CLOSE);

	bug.move();
	bug.display();



}


function loadData() {
	for (var i = 0; i < 50; i++) {
		var pre_factors = table_pre.getRow(i);
		append(preDeterminants, pre_factors);	
	}
}






function mouseClicked() {
	if (mouseX > a && mouseX < a+240 && mouseY > b-13 && mouseY < b+13) {
		append(totalP, preDeterminants[0].get(2));
		append(totalB, preDeterminants[1].get(2));
		append(totalC, preDeterminants[2].get(2));
		append(totalT, preDeterminants[3].get(2));
		append(totalF, preDeterminants[4].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+80 && mouseY < b+13+80) {
		append(totalP, preDeterminants[5].get(2));
		append(totalB, preDeterminants[6].get(2));
		append(totalC, preDeterminants[7].get(2));
		append(totalT, preDeterminants[8].get(2));
		append(totalF, preDeterminants[9].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+160 && mouseY < b+13+160) {
		append(totalP, preDeterminants[10].get(2));
		append(totalB, preDeterminants[11].get(2));
		append(totalC, preDeterminants[12].get(2));
		append(totalT, preDeterminants[13].get(2));
		append(totalF, preDeterminants[14].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+240 && mouseY < b+13+240) {
		append(totalP, preDeterminants[15].get(2));
		append(totalB, preDeterminants[16].get(2));
		append(totalC, preDeterminants[17].get(2));
		append(totalT, preDeterminants[18].get(2));
		append(totalF, preDeterminants[19].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+320 && mouseY < b+13+320) {
		append(totalP, preDeterminants[20].get(2));
		append(totalB, preDeterminants[21].get(2));
		append(totalC, preDeterminants[22].get(2));
		append(totalT, preDeterminants[23].get(2));
		append(totalF, preDeterminants[24].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+400 && mouseY < b+13+400) {
		append(totalP, preDeterminants[25].get(2));
		append(totalB, preDeterminants[26].get(2));
		append(totalC, preDeterminants[27].get(2));
		append(totalT, preDeterminants[28].get(2));
		append(totalF, preDeterminants[29].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+480 && mouseY < b+13+480) {
		append(totalP, preDeterminants[30].get(2));
		append(totalB, preDeterminants[31].get(2));
		append(totalC, preDeterminants[32].get(2));
		append(totalT, preDeterminants[33].get(2));
		append(totalF, preDeterminants[34].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+560 && mouseY < b+13+560) {
		append(totalP, preDeterminants[35].get(2));
		append(totalB, preDeterminants[36].get(2));
		append(totalC, preDeterminants[37].get(2));
		append(totalT, preDeterminants[38].get(2));
		append(totalF, preDeterminants[39].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+640 && mouseY < b+13+640) {
		append(totalP, preDeterminants[40].get(2));
		append(totalB, preDeterminants[41].get(2));
		append(totalC, preDeterminants[42].get(2));
		append(totalT, preDeterminants[43].get(2));
		append(totalF, preDeterminants[44].get(2));
	} else if (mouseX > a && mouseX < a+240 && mouseY > b-13+720 && mouseY < b+13+720) {
		append(totalP, preDeterminants[45].get(2));
		append(totalB, preDeterminants[46].get(2));
		append(totalC, preDeterminants[47].get(2));
		append(totalT, preDeterminants[48].get(2));
		append(totalF, preDeterminants[49].get(2));
	} 

	
	sumP = 0;
	for (var i = 0; i < totalP.length; i++) {
  		sumP = sumP + parseFloat(totalP[i]);	
  	}
	sumB = 0;
	for (var i = 0; i < totalB.length; i++) {
  		sumB = sumB + parseFloat(totalB[i]);	
  	}
	sumC = 0;
	for (var i = 0; i < totalC.length; i++) {
  		sumC = sumC + parseFloat(totalC[i]);	
  	}
	sumT = 0;
	for (var i = 0; i < totalT.length; i++) {
  		sumT = sumT + parseFloat(totalT[i]);	
  	}
	sumF = 0;
	for (var i = 0; i < totalF.length; i++) {
  		sumF = sumF + parseFloat(totalF[i]);	
  	}

  	sum = 0;
  	for (var i = 0; i < totalF.length; i++) {
  		sum = sumP + sumB + sumC + sumT + sumF;
  	}

  	//console.log(sumP);

  	bug = new Jitter();
}

// Jitter class
function Jitter() {
  this.x = x;
  this.y = y;
  this.diameter = 30;
  this.speed = map(sum, 0, 18.02, 0, 10);

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
  	fill(0,200);
  	ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}






