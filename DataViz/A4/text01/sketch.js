//Question :: How to load font ? .ttf

var myFont;
var headlines = [];
var section = [];
var subsection = [];
var maxHeadLen, minHeadLen;

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
  createCanvas(750, 850);
  background(0);

  textSize(10);
  //textFont(myFont);
  textAlign(LEFT);

  //noLoop(); // since we're not animating, one frame is sufficient: run draw() just once

  extractHeadlines();
}

function draw() {
  background(0);

  // Set the left and top margin
  var margin = 40;
  translate(margin, margin);

  var lineheight = 30;
  var rectheight = 8;

  //title of the page
  fill(255);
  textSize(50)
  textStyle(BOLD);
  text("Top Stories", 0, 30);

  fill(0, 200, 0);
  textSize(10);
  textStyle(ITALIC);
  text("New York Times", 280, 29);


  for (var i = 0; i < headlines.length; i++) {
    //draw rectangle
    fill(100);
    var rectwidth = map(headlines[i].length, minHeadLen, maxHeadLen, margin, width-margin-300);
    rect(0, 100 + i*lineheight, rectwidth, -1*rectheight)

    //draw headline, section, subsection
    fill(255);
    textSize(10)
    //text(headlines[i], 0, 100 + i*lineheight);
    //text(section[i], 450, i*lineheight);
    text(subsection[i], 600, 100 + i*lineheight);

    fill(0, 128 + sin(frameCount*0.1) * 128, 0);
    //textSize(12 + (mouseX / width)*72);
    text(section[i], 540, 100 + i*lineheight);

    fill(255);
    textSize(10 + (mouseX / width)*30);
    text(headlines[i], 0, 100 + i*lineheight);
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