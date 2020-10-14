let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24)

} //setup

function draw() {
  switch (state) {
    case 0:
      background('red');
      text("state 0", 250, 250);
      break;

    case 1:
      background('yellow');
      text("state 1", 250, 250);
      break;

    case 2:
      background('green');
      text("state 2", 250, 250);
      break;
  } //switch

} //draw

function mouseReleased() {
  state = state + 1;
  if (state > 2) {
    state = 0;
  } //if

} //mouseReleased
