/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variables
let x = 0.0, y = 0.0, z = 0.0 ; // accelerometer variables
let flameImage;
let xPosition = 0;
let yPosition = 0;



function setup() {

  createCanvas(windowWidth, windowHeight);

  flameImage = loadImage("assets/flame.png");
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {

  background('black'); //black

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the flame depending on the alpha intake

  image(flameImage, 0, 0, 300, 300);
  fill (255,215,0,50);
  ellipse(0,0,600,600);
  // rect(0, 0, 100, 100) ;
  pop();


  // Text commands that display debugging data
//  textAlign(LEFT);
//  textSize(20);
//  fill('black');
//  text("orientation data:", 25, 25);
//  textSize(15);
//  text("alpha: " + alpha, 25, 50);
//  text("beta: " + beta, 25, 70);
//  text("gamma: " + gamma, 25, 90);
//  textSize(20);
//  text("acceleration data:", 25, 125);
//  textSize(15);
//  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
//  text("y = " + y.toFixed(2), 25, 170);
//  text("z = " + z.toFixed(4), 25, 190);

//Text that makes CTK type in the background
  fill('red');
  noStroke();
  textSize(40);
 textAlign(CENTER);
 text("Look Around!", width / 4, height / 4);

}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
