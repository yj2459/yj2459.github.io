
var headlines = [];
var hitwords = [
  "world",
  "olympics"
];
var sourceText = "OLYMPIC is ONGOING";
var curIndex = 0;

function preload() {

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/opinion.json";
  var apikey = "e0b773a6804541fcb64d23e7c14bc2fd"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(640, 850);
  background(0);

  textSize(10);
  textAlign(LEFT);

  frameRate(1);
  //noLoop(); // since we're not animating, one frame is sufficient: run draw() just once

  extractHeadlines();
}

function draw() {
  background(0);

  //No way
  push();
  textSize(25);
  textStyle(ITALIC);
  fill(0,255,0);
  text("!No way!", width*(2/3), 80);
  pop();

  var lineheight = 20;
  var margin = 40;
  translate(margin, margin);

  //TOP stories
  push();
  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      if (hitwords.includes(words[j].toLowerCase())) {
        fill(255, 80, 120);
        textStyle(BOLD);
      } else {
        fill(255);
        textStyle(NORMAL);
      }
      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
  }
  pop();

  //Animated text
  push();
  fill(255, 80, 120);
  textSize(144);
  textAlign(CENTER, CENTER);

  text(
    sourceText.substring(curIndex, curIndex+1),
    width*(2/3), height*(1/6));
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }

  text(
    sourceText.substring(curIndex, curIndex+1),
    width*(2/3), height*(2/6));
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }

  text(
    sourceText.substring(curIndex, curIndex+1),
    width*(2/3), height*(3/6));
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }

  text(
    sourceText.substring(curIndex, curIndex+1),
    width*(2/3), height*(4/6));
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }

  text(
    sourceText.substring(curIndex, curIndex+1),
    width*(2/3), height*(5/6));
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }

  pop();

}

function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.
    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}