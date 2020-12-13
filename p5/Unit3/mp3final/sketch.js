let timer = 12;
var viruses = [];
var maskPos;
var myState = 0;
var maxviruses = 10;

let mySound1;



function preload() {

  mySound1 = loadSound('assets/start.mp3');


  mySound1.loop();
  mySound1.pause();
  mySound1.stop();



} //preload

function stopSongs() {
  mySound1.stop();
}

function setup() {
  createCanvas(800, 800);

  imageMode(CENTER);
  imggame = loadImage("assets/game.png");
  imglost = loadImage("assets/lost.png");
  imgmask = loadImage("assets/mask.png");
  imgstart = loadImage("assets/start.png");
  imgvirus = loadImage("assets/virus.png");
  imgwin = loadImage("assets/win.png");


  f1 = loadFont("assets/1.ttf");
  f2 = loadFont("assets/2.ttf");
  f3 = loadFont("assets/3.ttf");
  f4 = loadFont("assets/4.ttf");

  rectMode(CENTER);

  for (var i = 0; i < maxviruses; i++) {
    viruses.push(new virus());

    textAlign(CENTER);

  } //for viruses.pushend

  maskPos = createVector(400, 170);

} //setupend

function draw() {

  switch (myState) {
    case 0: //menu

      stopSongs();



      background('blue');

      image(imgstart, width / 2, height / 2, 800, 800);

      fill('White');
      textSize(34);
      textFont(f1)
      text("Click to Stave off Disaster!", width / 2, height - 50);

      break;


    case 1:
      stopSongs();

      game();


      break;

    case 2: //win state

      stopSongs();

      background('blue');

      image(imgwin, width / 2, height / 2, 800, 800);
      fill('White');
      textFont(f4)
      textSize(34);
      text("Until we get the Vaccine, Click again!", width / 2, height - 50);

      break;

    case 3: //lose

      stopSongs();


      background('blue');

      image(imglost, width / 2, height / 2, 800, 800);
      fill('White');
      textFont(f3)
      textSize(34);
      text("Click to Try for the Next Person!", width / 2, height - 50);

      break;


  } //endswitchmystate


} //drawend

//mouse controls
function mouseReleased() {
  switch (myState) {
    case 0: //menu
      myState = 1;
      break;

    case 2: //win state
      resetTheGame();


      myState = 0;
      break;


    case 3: //lose
      resetTheGame();

      myState = 0;
      break;

  } //switchend
} //mousereleasedend


function game() {

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  if (timer == 0) {
    myState = 3
  }

  image(imggame, width / 2, height / 2, 800, 800);


  for (var i = 0; i < viruses.length; i++) {

    viruses[i].display();
    viruses[i].drive();
    if (viruses[i].pos.dist(maskPos) < 75) {
      viruses.splice(i, 1);

    } //ifpos.disend
  } //for viruses.drive and display end


  if (viruses.length == 0) {
    myState = 2;
  } //if0end

  image(imgmask, maskPos.x, maskPos.y, 150, 150);

  checkForKeys();

} //game end

function checkForKeys() {

  if (keyIsDown(LEFT_ARROW)) {
    maskPos.x -= random(2, 6);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    maskPos.x += random(2, 6);
  }

  if (keyIsDown(UP_ARROW)) {
    maskPos.y -= random(2, 6);
  }

  if (keyIsDown(DOWN_ARROW)) {
    maskPos.y += random(2, 6);
  }
} //checkForKeysend


function virus() {

  this.pos = createVector(random(width), random(height));

  this.vel = createVector(random(-1, 3), random(-3, 1));

  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.display = function() {

    fill(this.r, this.g, this.b, 50);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 60, 60);
    image(imgvirus, this.pos.x, this.pos.y, random(20, 30), random(20, 30));

  } //thisdisplayend

  this.drive = function() {

    this.pos.add(this.vel);

    if (this.pos.x > width) {
      this.pos.x = 0;
    } //--ifthis.pos.yaend
    if (this.pos.x < 0) {
      this.pos.x = width;
    } //--ifthis.pos.ybend

    if (this.pos.y > height) {
      this.pos.y = 0;
    } //--ifthis.pos.yaend
    if (this.pos.y < 0) {
      this.pos.y = height;
    } //--ifthis.pos.ybend

  } //thisdriveend

} //virusclassend

function resetTheGame() {
  viruses = [];
  timer = 12;
  //respon cars

  for (let i = 0; i < maxviruses; i++) {
    viruses.push(new virus());
  } //forend
} //resetend
