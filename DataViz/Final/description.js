var table;
var griefData;

function preload() {
  table = loadTable('pre_grief.csv', 'csv', 'header');
  //table = loadTable('post_grief.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 400);
  loadData();

}

function draw() {
  background(255);
  text("hello", 0, 30);

}

function loadData() {
  var preV = table.getColumn("Prebereavement Variables");
  //var postV = table.getColumn("Postbereavement Variables");
  // var griefDS = table.getColumn("Grief Duration Subsclaes");
  // var values = table.getColumn("Values");

  console.log(preV);
  // console.log(griefDS);
}