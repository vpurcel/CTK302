let myState = 0;

function setup() {
  createCanvas(500, 500);
} //setup

function draw() {
  switch (myState) {

    case 0:
      background('white');
      text("case 0", 250, 250);
      break;

    case 1:
      background('pink');
      text("case 1", 250, 250);
      break;

    case 2:
      background('orange');
      text("case 2", 250, 250);
      break;
  } //switch

  fill('brown');
  rect(10, 10, 50, 25);

} //draw

function mouseReleased() {

  if ((mouseX > 10) && (mouseX < 60) && (mouseY > 10) && (mouseY < 35)) {

    myState++;
    if (myState > 2) {
      myState = 0;
    } //if myState
  } //if mouseX&Y
} //mouseReleased
