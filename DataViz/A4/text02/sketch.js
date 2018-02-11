//Question :: How to load font ? .ttf

var myFont;
var headlines = [];
var section = [];
var subsection = [];
var maxHeadLen, minHeadLen;
var hitwords = [
  "World",
  "Olympic"
];

function preload() {
  //myFont = loadFont('LeagueMono-Light.ttf');

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "e0b773a6804541fcb64d23e7c14bc2fd"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(640, 800);
  background(0);

  textSize(10);
  //textFont(myFont);
  textAlign(LEFT);

  noLoop(); // since we're not animating, one frame is sufficient: run draw() just once

  extractHeadlines();
}

function draw() {
  background(0);

  // Set the left and top margin
  var margin = 40;
  translate(margin, margin);

  var lineheight = 30;
  var rectheight = 8;

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ') + split(section[i], ' ') + split(subsection[i], ' ');
    var nextX = 0;
    //console.log(words);

    // draw rectangle
    // fill(120);
    // var rectwidth = map(headlines[i].length, minHeadLen, maxHeadLen, margin, width-margin-200);
    // rect(0, i*lineheight, rectwidth, -1*rectheight)

    // draw headline, section, subsection
    // fill(255);
    // text(headlines[i], 0, i*lineheight);
    // text(section[i], 450, i*lineheight);
    // text(subsection[i], 500, i*lineheight);

    // if (hitwords.includes(section[i])) {
    //   fill("orange");
    // } else {
    //   fill(255);
    // }

    for (var j = 0; j < words.length; j++) {
      if (hitwords.includes(words[j])) {
        fill("orange");
      } else {
        fill(255)
      }

      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
  }

  
}

function extractHeadlines() {

  //console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < (nytResponse.results.length)/2; i++) {
    var sec = nytResponse.results[i].section;
    var ss = nytResponse.results[i].subsection;
    var h = nytResponse.results[i].title;
  
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);
    append(subsection, ss);
    append(section, sec);
    //console.log(ss);
  }

  //console.log(headlines); // make sure counted data looks as expected
  //console.log(maxHeadLen);
  //console.log(minHeadLen);
}