var r =0.0;
var posX=25;
var posY = 200;
var ballDiameter = 40;


var velocityY=0.0;
var gravity = 1.5; 
var theta = 0;
var onGround = false; 
var jumpSize = -30; 


function setup() {
  createCanvas(800, 600);
  print(solvenumbers(random(2000), random(2000), random(2000), random(2000)));
}

function draw() {
  background(132,45,65);
  line(0,height, width, height); 
  ball();
   translate(600,100);
  scale(r); 

  //creating a pixle sun 
  stroke(255,255,0);
  fill(200,200,0);
  rectMode(CENTER);
  rect(0, 0, 10, 10);
  

  // Increase the scale variable, to make the pixle sun look like its coming closer
  r += 0.2;

  // Retstart r
  if (r > 20) {
    r = 0;
    
  }
}
function ball(){
  
  velocityY = gravity + velocityY;
  
  posY= velocityY + posY;
  
  if (posY +(ballDiameter/2) >= (height)){
    posY= (height)- (ballDiameter/2);
    onGround = true;
  } else {
    onGround = false;
  }
   push();
  noStroke();
for (let x=1; x<10; x++){ //making the ball guy
  ellipse(posX+100, posY, ballDiameter+(x+20), ballDiameter + (x+20));
   strokeWeight(1.5);
    colorMode(HSB, 360, 100, 100, 50);
   fill(map(mouseX, 0, width, 0, 255), 
      map(mouseY, 0, height, 0, 255), 
      127, 204);
    fill(127, map(mouseX, 0, width, 0, 255), 
      map(mouseY, 0, height, 0, 255), 204);
    fill(map(mouseX, 0, width, 0, 255), 
      map(mouseY, 0, height, 0, 255), 
      127, 204)
  push();// the ball hitting ballguy
  rotate(theta);
  translate(posX, posY);
  fill(50, 200, 255);
  ellipse(0, 0, 32, 32);
  theta += 0.01
  pop();

}
  pop();
}
function mousePressed(){
  if (onGround){
    jump();
  }
}

function jump(){ //give ball guy the ability to jump
  velocityY = jumpSize;
}
  function solvenumbers (addend1, addend2, timeend1, dividend1) {//Solve a semicomplex equation to save the world from the incoming sun.
    var result;
    result = addend1 + addend2 * timeend1 / dividend1;
    return result;
  }