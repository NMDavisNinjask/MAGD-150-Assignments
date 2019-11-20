var maxImages; // Total # of images, used from example 3 to add mirrors
var imageIndex; // Initial image to be displayed is the first

// Declaring an array of images.
var mirrors = []; 


function preload(){
  // Loading the images into the array
 soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('service-bell_daniel_simion.wav')

  for (let i = 0; i < 10; i++ ) {
    mirrors[i] = loadImage( "mirror" + i + ".jpg" );
  }
}
function setup() { //using Example 4
  let img = createImage(400, 400); 
  img.loadPixels();
  createCanvas(400, 400);
  background(0);
  maxImages = 10;
  imageIndex = 0;
   print(imageIndex);
  // helper for writing color to array
    reverb = new p5.Reverb();

 delay = new p5.Delay();
  delay.process(mySound, 0.12, 0.7, 2300);
  reverb.process(mySound, 6, 0.2);

  reverb.amp(4); // turn it up using amp and reverb (2/2)
  
  function writeColor(image, x, y, red, green, blue, alpha) {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }

  let x, y;
  // fill with random colors
  for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let red = random(255);
      let green = random(255);
      let blue = random(255);
      let alpha = 255;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }

  // draw a red line
  y = 0;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 255, 0, 0, 255);
  }

  // draw a green line
  y = img.height - 1;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 0, 255, 0, 255);
  }

  img.updatePixels();
  image(img, 0, 0);
}
function draw() {
  // Displaying one image
  image(mirrors[imageIndex], 0, 0, 200, 200);
 
}
function mousePressed() {
  // A new image is picked randomly when the mouse is clicked
// The bell dings when the mouse is clicked
  imageIndex = int(random(mirrors.length));
  mySound.setVolume(0.1);
  mySound.play();
 
}

