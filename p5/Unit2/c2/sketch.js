var mic;
var vol;
let x = 0;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
textSize(40);
textAlign(CENTER);
rectMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
} //setup

function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case 0:
      background('orange');
      text("Please be Quiet", width/2, height/2);
      if (vol > .08) {
        state = 1;

      } //if vol
      break;

    case 1:
      background('red');
      text("QUIET DOWN YO!", width/2, height/2);
      timer = timer + 1;

      if (timer > 5 * 80) {
        state = 0;
        timer = 0;
      }//iftimer

      break;
  }//switchstate
} //draw

function touchStarted() {
  getAudioContext().resume();
} //touch
