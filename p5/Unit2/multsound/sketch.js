let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/1.mp3");
  song2 = loadSound("assets/2.mp3");
  song3 = loadSound("assets/3.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

} //preload

function setup() {
  createCanvas(500, 500);
  textSize(24);


} //setup

function draw() {
  switch (state) {

    case 0:
      background('red');
      song1.play();
      state = 1;
      break;

    case 1:
      background('yellow');
      text("listen to song 1", 250, 250);
      break;

    case 2:
      background('red');
      song2.play();
      state = 3;
      break;

    case 3:
      background('yellow');
      text("listen to song 2", 250, 250);
      break;

    case 4:
      background('red');
      song3.play();
      state = 5;
      break;

    case 5:
      background('yellow');
      text("listen to song 3", 250, 250);
      break;
  } //switch

} //draw

function mouseReleased() {
  song1.pause();
  song2.pause();
  song3.pause();
  state = state + 1; //state++;
  if (state > 5) {
    state = 0;
  } //if

} //mouseReleased
