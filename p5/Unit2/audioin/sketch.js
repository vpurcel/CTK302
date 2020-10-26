//mic audio in setup
var mic;
var vol;
var c = 'green';
var g = 18;
var t = 'white';

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
} //setup


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something
    g = random(60);
    t = color(random(255), random(255), random(255));
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  } //if volume check

  // extra stuff for debugging
  fill(t);
  textSize(g);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);
  text("Please be Quiet", 10, 200);

} //draw


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
} // touchstarted
