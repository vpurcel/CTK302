var mic;
var vol;
let x = 0;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
textSize(40);
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case 0:
      background('orange');
      text("Please be Quiet", 250, 250);
      if (vol > .08) {
        state = 1;

      }
      break;

    case 1:
      background('red');
      text("QUIET DOWN YO!", 250, 250);
      timer = timer + 1;

      if (timer > 5 * 80) {
        state = 0;
        timer = 0;
      }

      break;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
