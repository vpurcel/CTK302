var mic;
var vol;
let x = 0;
let y = 0;
let velocity = .51;
let state = 0;

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
      velocity = .51;
      if (vol > .08) {
        state = 1;

      } //if vol
      break;

    case 1:
      background('red');
      velocity = 10;

      if (vol < .08) {
        state = 0;

        break;
      } //if

    } //switchstate

    fill('green');
    rect(x, y, 50, 30);
    x = x + velocity;
    if (x > width) {
      x = 0;
    }//ifx
      y = y + velocity;
      if (y > width) {
        y = 0;

    }//ify
      text("SPEED = VOLUME", width/2, height/2);
            } //draw

      function touchStarted() {
        getAudioContext().resume();
      } //touch
