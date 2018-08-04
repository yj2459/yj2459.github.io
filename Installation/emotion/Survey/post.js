var table_post; 
var griefData;
var postDeterminants = [];
var griefvalues;
var totalP = [];
var totalB = [];
var totalC = [];
var totalT = [];
var totalF = [];
var total = [];
var sum;
var sumP, sumB, sumC, sumT, sumF;

var x = 1320;
var y = 680;
var l = 340;

//objects
var a = 300;
var b = 300;
var post = {
"Anger" :  [a, b],
"Crying" : [a, b + 50],
"Dwelling on events leading up to the death" : [a, b+100],
"Feeling of numbness" : [a, b+150],
"Feeling that life had little or no meaning" : [a, b+200],
"Feeling the presence of dead person" : [a, b+250],
"Frustration" : [a, b+300],
"Guilt" : [a, b+350],
"Inability to control emotions in private" : [a, b+400],
"Inability to control emotions in public" : [a, b+450],
"Lack of concentration" : [a, b+500],
"Loss of appetitle" : [a, b+550],
"Loss of interest" : [a, b+600],
"Loss of sleep" : [a, b+650],
"Oversleep" : [a, b+700],
"Thinking at times the dead person was still alive" : [a, b+750]
};

var c = 700;
var subscales = {
"Physiological" : [c, 440],
"Behavioral" : [c, 550],
"Cognitive" : [c, 660],
"Attitudes toward Deceased" : [c, 770],
"Affective" : [c, 880],
};

//lists
var post_list = [
"Anger",
"Crying",
"Dwelling on events leading up to the death",
"Feeling of numbness",
"Feeling that life had little or no meaning",
"Feeling the presence of dead person",
"Frustration",
"Guilt",
"Inability to control emotions in private",
"Inability to control emotions in public",
"Lack of concentration",
"Loss of appetitle",
"Loss of interest" ,
"Loss of sleep",
"Oversleep",
"Thinking at times the dead person was still alive"
]


var subscales_list = [
"Physiological",
"Behavioral",
"Cognitive",
"Attitudes toward Deceased",
"Affective"
];



function preload(){
	table_post = loadTable('post_grief.csv', 'csv', 'header');
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
	text("Post Determinants", 40, 230);
	strokeWeight(1);
	stroke(0);
	noFill();
	rect(35, 200, 238, 38);



 	var margin = 10;
 	var rectwidth = 240;



 	//draw everything
  	for (var i = 0; i < postDeterminants.length; i++) {
  	var startXY_i = post[postDeterminants[i].get(0)];
   	var endXY_i = subscales[postDeterminants[i].get(1)];
  	console.log(startXY_i);
  	console.log(endXY_i);

  	//lines
  	stroke(58, 120, 188, 50);
  	strokeWeight(map(postDeterminants[i].get(2), 0, 1, 0, 10));
   	line(startXY_i[0], startXY_i[1], endXY_i[0], endXY_i[1]);


   	//points
  	strokeWeight(1);
  	//fill(#fef15e)
  	fill(0);
  	ellipse(startXY_i[0], startXY_i[1], 5, 5);
  	ellipse(endXY_i[0], endXY_i[1], 5, 5);

  
  	//mouseover
  	if (mouseX > startXY_i[0]-240 && mouseX < startXY_i[0] && mouseY > startXY_i[1]-13 && mouseY < startXY_i[1]+13) {
  	//fill(104, 156, 210);
  	fill(58, 96 + sin(frameCount*0.3) * 128, 255);
  	rect(startXY_i[0]-260, startXY_i[1]-13, 245, 26);

  	stroke(24, 43, 135);
  	strokeWeight(map(postDeterminants[i].get(2), 0, 1, 0, 10));
   	line(startXY_i[0], startXY_i[1], endXY_i[0], endXY_i[1]);
	}

	else {
  	stroke(0);
  	fill(0);
  	rect(startXY_i[0]-260, startXY_i[1]-13, 225, 26);
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
	for (var j = 0; j < post_list.length; j++) {
	textStyle(NORMAL);
	textAlign(LEFT);
 	textSize(11);
 	fill(255);
 	noStroke()
  	text(post_list[j], margin+33, 302 + 50*j);
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
	for (var i = 0; i < 80; i++) {
		var post_factors= table_post.getRow(i);
		append(postDeterminants, post_factors);
	}
}



function mouseClicked() {
	if (mouseX > a-240 && mouseX < a && mouseY > b-13 && mouseY < b+13) {
		append(totalP, postDeterminants[0].get(2));
		append(totalB, postDeterminants[1].get(2));
		append(totalC, postDeterminants[2].get(2));
		append(totalT, postDeterminants[3].get(2));
		append(totalF, postDeterminants[4].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+50 && mouseY < b+13+50) {
		append(totalP, postDeterminants[5].get(2));
		append(totalB, postDeterminants[6].get(2));
		append(totalC, postDeterminants[7].get(2));
		append(totalT, postDeterminants[8].get(2));
		append(totalF, postDeterminants[9].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+100 && mouseY < b+13+100) {
		append(totalP, postDeterminants[10].get(2));
		append(totalB, postDeterminants[11].get(2));
		append(totalC, postDeterminants[12].get(2));
		append(totalT, postDeterminants[13].get(2));
		append(totalF, postDeterminants[14].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+150 && mouseY < b+13+150) {
		append(totalP, postDeterminants[15].get(2));
		append(totalB, postDeterminants[16].get(2));
		append(totalC, postDeterminants[17].get(2));
		append(totalT, postDeterminants[18].get(2));
		append(totalF, postDeterminants[19].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+200 && mouseY < b+13+200) {
		append(totalP, postDeterminants[20].get(2));
		append(totalB, postDeterminants[21].get(2));
		append(totalC, postDeterminants[22].get(2));
		append(totalT, postDeterminants[23].get(2));
		append(totalF, postDeterminants[24].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+250 && mouseY < b+13+250) {
		append(totalP, postDeterminants[25].get(2));
		append(totalB, postDeterminants[26].get(2));
		append(totalC, postDeterminants[27].get(2));
		append(totalT, postDeterminants[28].get(2));
		append(totalF, postDeterminants[29].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+300 && mouseY < b+13+300) {
		append(totalP, postDeterminants[30].get(2));
		append(totalB, postDeterminants[31].get(2));
		append(totalC, postDeterminants[32].get(2));
		append(totalT, postDeterminants[33].get(2));
		append(totalF, postDeterminants[34].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+350 && mouseY < b+350) {
		append(totalP, postDeterminants[35].get(2));
		append(totalB, postDeterminants[36].get(2));
		append(totalC, postDeterminants[37].get(2));
		append(totalT, postDeterminants[38].get(2));
		append(totalF, postDeterminants[39].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+400 && mouseY < b+13+400) {
		append(totalP, postDeterminants[40].get(2));
		append(totalB, postDeterminants[41].get(2));
		append(totalC, postDeterminants[42].get(2));
		append(totalT, postDeterminants[43].get(2));
		append(totalF, postDeterminants[44].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+450 && mouseY < b+13+450) {
		append(totalP, postDeterminants[45].get(2));
		append(totalB, postDeterminants[46].get(2));
		append(totalC, postDeterminants[47].get(2));
		append(totalT, postDeterminants[48].get(2));
		append(totalF, postDeterminants[49].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+500 && mouseY < b+13+500) {
		append(totalP, postDeterminants[50].get(2));
		append(totalB, postDeterminants[51].get(2));
		append(totalC, postDeterminants[52].get(2));
		append(totalT, postDeterminants[53].get(2));
		append(totalF, postDeterminants[54].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+550 && mouseY < b+13+550) {
		append(totalP, postDeterminants[55].get(2));
		append(totalB, postDeterminants[56].get(2));
		append(totalC, postDeterminants[57].get(2));
		append(totalT, postDeterminants[58].get(2));
		append(totalF, postDeterminants[59].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+600 && mouseY < b+13+600) {
		append(totalP, postDeterminants[60].get(2));
		append(totalB, postDeterminants[61].get(2));
		append(totalC, postDeterminants[62].get(2));
		append(totalT, postDeterminants[63].get(2));
		append(totalF, postDeterminants[64].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+650 && mouseY < b+13+650) {
		append(totalP, postDeterminants[65].get(2));
		append(totalB, postDeterminants[66].get(2));
		append(totalC, postDeterminants[67].get(2));
		append(totalT, postDeterminants[68].get(2));
		append(totalF, postDeterminants[69].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+700 && mouseY < b+13+700) {
		append(totalP, postDeterminants[70].get(2));
		append(totalB, postDeterminants[71].get(2));
		append(totalC, postDeterminants[72].get(2));
		append(totalT, postDeterminants[73].get(2));
		append(totalF, postDeterminants[74].get(2));
	} else if (mouseX > a-240 && mouseX < a && mouseY > b-13+750 && mouseY < b+13+750) {
		append(totalP, postDeterminants[75].get(2));
		append(totalB, postDeterminants[76].get(2));
		append(totalC, postDeterminants[77].get(2));
		append(totalT, postDeterminants[78].get(2));
		append(totalF, postDeterminants[79].get(2));
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






