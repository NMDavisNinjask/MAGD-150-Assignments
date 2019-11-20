let playing = false;
let fingers;
let button;
let rocket;
let img;
let capture;
var stats;
var homeRuns = [];
let earthquakes;
let b;
function preload() {
  rocket = loadModel('scifi_cartoon_rocket.obj');
  img = loadImage('skee.jpg')
   stats = loadTable("ortiz.csv");// used the table to give the csv file in the print 
   let url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url); /// used earthquake example to create html file
  
}

function setup() { //using example Primtives to create sphere
 createCanvas(710, 400, WEBGL);
    var rowCount = stats.getRowCount();
  homeRuns = [];
  for (var i = 0; i < rowCount; i++) {
    homeRuns[i] = stats.getNum(i, 1);
  }
    for (var i = 0; i < stats.getRowCount(); i++) {
    // Gets the value from row i, column 0 in the file
    var year = stats.get(i, 0);
    // Gets the value from row i, column 1
    var hRuns = stats.get(i, 1);   
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3); 
    print(year, hRuns, rbi, average);
        fingers = createVideo(['download.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
      b=0;
    }
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}


function draw() {
  background(0);
  normalMaterial()
   let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
   translate(240, 0, 0);
    ambientLight(60, 60, 60); //using part of Materials Textures to get lighting
 pointLight(255, 255, 255, locX, locY, 100);
  
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();
  
  push();
  translate (-width / 4, -height / 4, 0)
  specularMaterial(20)
 rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(rocket);
  scale(1.7)
  pop();
  
  push();
 translate (-150 * 2, 100, 0)
   rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(80);
  pop();
  
   
 
  for (var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length-1, 20, 460);
    line(x, 20, x, 100);
  }
  // Draw lines based on home run data
  noFill();
  stroke(0);
  beginShape();
  for (var i = 0; i < homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length-1, 20, 460);
    var y = map(homeRuns[i], 0, 60, 100, 20);
    vertex(x, y);
  }
  endShape();
if (b<0){
    b=0;
  }
  let earthquakeMag = earthquakes.features[b].properties.mag;
  let earthquakeName = earthquakes.features[b].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  print(earthquakeName, 0, height - 30, width, 30);

    camera(0, 0, 20 + sin(frameCount * 0.01) * 400, 0, 0, 0, 0, 1, 0);
  
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    b=b+1; 
    print(b);
  } else if(keyCode === LEFT_ARROW){
    b--;
  }
  loop();
}
    