let dude1; // using the class example from Boxdude to create  bees
let dude2;
let dude3;
let flows = []; // using example 2 jitterbugs to create moving circular flowers
var gray= [];// using arrayloops to help make the background 
function setup(){
  background(255);
  createCanvas(800,600);
  dude1 = new BeeDude(350,400);
  dude2= new BeeDude(200,300);
  dude3= new BeeDude(500,100);
  // Create objects
  for (let i = 0; i < 150; i++) {
    flows.push(new Flowers());
  }
  for (var i = 0; i<width; i++){
  gray[i] =(50, 89, 100);
}
}

function draw(){
  background(50, 89, 100);
    for (var i=0; i< gray.length; i++){
    stroke(gray[i]);
    line(i,0,i,height);
  }
   dude1.move(); //allowing the bees to move around
  dude1.draw();
  dude2.move();
  dude2.draw();
  dude3.move();
  dude3.draw();
  for (let i = 0; i < flows.length; i++) {
    flows[i].move();
    flows[i].display();
  }
}
class BeeDude{
  
  constructor(){
var centerX, centerY, offset1, offset2;

 this.centerX = random(0,width);
  this.centerY = random(0,height)
    this.offset1 =15
    this.offset2=15
}

move(){
  this.centerX +=round(random(-10,10))
  this.centerY += round(random(-10,10))
     this.offset1 =15
    this.offset2=15
}
 draw(){
rectMode(CENTER);
   fill(255,255,0);
   rect(this.centerX,this.centerY,40 ,30);
   fill(255)
   rect(this.centerX+this.offset1, this.centerY+this.offset2, 20,20);
   rect(this.centerX-this.offset1, this.centerY+this.offset2, 20,20);
 }

}
class Flowers { //Creation of the circular flowers
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
    this.c = color(random(255), random(255), random(255));
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}