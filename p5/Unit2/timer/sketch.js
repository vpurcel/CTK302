let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
} //setup

function draw() {
  switch (state) {

    case 0:
      background('red');
      text("case0,250,250")
      //psuedo code have a increment the timer variable
      timer = timer + 1;
      // if the time var is greater than 200
      if (timer > 200) {
        // make it go to state 1
        state = 1;
        timer = 0;
      } //if
      break;

    case 1:
      background('green');
      break;

    case 0:
      break;

  } //switch

} //draw
