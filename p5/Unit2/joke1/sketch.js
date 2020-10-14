let state = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
} //setup

function draw() {

  switch (state) {
    case 0:
      background('purple');
      text("Why don’t ants get sick?", 250, 250, 350, 200);
      break;

    case 1:
      background('orange');
      text("Because of their little anty bodies", 250, 250, 350, 200);
      break;
  } //switch

} //draw

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;

  } //if state

} //mouseReleased
