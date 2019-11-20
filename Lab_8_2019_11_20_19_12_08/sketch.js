var b;//using example 1-2 with class 

headlines = []//using 17-3 to make


var f; // Global font variable
var x; // Horizontal location
var index = 0;
var poorRichard;
var d;
function preload(){
  headlines= loadStrings("ball.txt");
}
function setup() {
  createCanvas(500, 500,P2D);
  b = new Ball();
  f = loadFont( "COMIC.TTF");
 
  x = width;
 noStroke();


  poorRichard = loadFont("POORICH.TTF");

 
  textAlign(LEFT, CENTER);


  textFont(poorRichard);
  
  
 textSize (24);
   pdf = createPDF();
    pdf.beginRecord();

}

function draw() {
     rect(0, 0, width, height);
background(25,143,56);
  push(); // Using example poor Richard to make animated text
  translate(width / 2.0, height / 2.0);
  rotate(frameCount / 90.0);
  fill(127, 255, 255, 127);
  textFont(poorRichard,24);
  text("Ball\ The\ Movie.", 0, 0);
  pop();

  push();
  translate(width / 2.0, height / 2.0);
  shearX(frameCount / 90.0);
  fill(255, 255, 127, 127);
  textFont(poorRichard,24)
  text("Ball \The \Movie.", 0, 0);
  pop();

  push();
  translate(width / 2.0, height / 2.0);
  shearY(frameCount / 90.0);
  fill(255, 127, 255, 127);
  textFont(poorRichard,24)
  text("Ball \The \Movie", 0, 0);
  pop();

  b.update();
 b.display();
   
  textFont(f, 16);
  textAlign (LEFT);
  
  text(headlines[index], x, height-20); 


  x = x - 3;

  let w = textWidth(headlines[index]); 
  if (x < -w) {
    x = width;
    index = (index + 1) % headlines.length;
}
  function mousePressed(){
          pdf.save();
  
}

}

class Ball {
  constructor() {
    this.position = createVector(100, 100);
    this.velocity = createVector(2.5, 5);
  }

  update() {
    // Add the current speed to the position.
    this.position.add(this.velocity);
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.position.y > height) || (this.position.y < 0)) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
  display() {
    // Display circle at x position
    stroke(0);
    fill(175,23,231);
    ellipse(this.position.x,this.position.y, 16, 16);
  }
}

