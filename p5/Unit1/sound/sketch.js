var song1;

function preload() {
  script = loadSound('assets/bells.mp3');
} //preload

function setup() {
  createCanvas(720, 200);
  background('white');

  song1.play();
} //setup

function draw() {

} //draw

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } //if
  else {
    song1.play();
  } //else 
} //mouseReleased

function touchstarted() {
  getAudioContext().resume();
}//touchstarted
