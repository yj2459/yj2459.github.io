//
// Example: NYC H2O Consumption
// by Agnes Chang. 2018.
// http://agneschang.net/gsapp-dataviz-archhum/
//
// This example uses NYC Open Data 2017 Water consumption (2016 data)
// per borough to demonstrate highlighting lines on mouseover.
//

// data variables
var waterData = {}; // use as object; see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
var maxWater = [];
var minWater = [];

// drawing constants
var dotW = 8;
var dotXSpacing = 50;
var colors = { Physiological: "#535f4a", Behavior: "#979b70", Cognitive: "#d0c88a", "Attitudes toward Deceased": "#5786b5", Affective: "#303d49" };
var margin = 50;
var labelTextSize = 18;

// state variables
var state = 0; // sums = 0, avgs = 1

function preload(){
  table = loadTable('Deteminants of Grief Duration-Pre Variables.csv', 'csv', 'header');
}

function setup() {
  button = createButton('next');
  button.mousePressed(nextState);

  createCanvas(600, 400);
  loadData();

  textSize(labelTextSize);
  noStroke();
}

function draw() {
  background(255);
  //text(preV)
}

function nextState() {
  state = (state == 0) ? 1 : 0; // shorthand if-statement, aka "inline if"
}

function loadData() {
  // convert to format { borough: [ 99, 99, 99, 99 ]}
  var preV = table.getColumn("Prebereavement Variables");
  var griefDS = table.getColumn("Grief Duration Subsclaes");
  var values = table.getColumn("Values");

  // loadTable automatically ignores header row so we can start index at 0
  for (var i=0; i<preV.length; i++) {
    griefData[preV[i]] = [ greifDS[i], values[i] ];
  }

  console.log(preV)
  //maxWater = [ max(sum2015), max(avg2015), max(sum2016), max(avg2016) ];
  //minWater = [ min(sum2015), min(avg2015), min(sum2016), min(avg2016) ];
}