let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
} //setup

function draw() {

  switch (state) {

    case 0:
      background('red');
      text("Where does society send bad rainbows?", 250, 250, 350, 200);
      timer = timer + 1;
      if (timer > 5 * 60) {
        state = 1;
        timer = 0;
      } //timer


      break;

    case 1:
      background('blue');
      textSize(100);
      text("PRISM!", 250, 250, 350, 200);
      break;
  } //switch state
} //draw
