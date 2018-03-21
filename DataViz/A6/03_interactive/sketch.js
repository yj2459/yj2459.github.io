var table;
var reservoirVolume = [];
var waterVolume = [];

var labelTextSize = 12;
var margin = 100;

function preload() {
  table = loadTable('Reservoir_A.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600,400);
  loadData();
  //frameRate(30);

  textSize(labelTextSize);
  noStroke();
}

function loadData() {
  var rVolume = table.getColume("Volume");

  for(var i = 0; i < rVolume.length; i++){
    reservoirVolume[rVolume[i]]++;
  }
  console.log(reservoirVolume);
  //console.log(rVolume);
}

function draw() {
  background(255); 
  line(margin, height/2, width-margin, height/2);
  strokeWeight(7);
  stroke("black");

  // for(var i = 0; i < reservoirVolume, i++) {
  //   rect(margin, margin, i, (height/2)-margin);
  // }



}