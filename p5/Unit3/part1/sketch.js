let cars = [];
var img1;

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  img1 = loadImage("assets/spaceship1.jpg");
} // end setup

function draw() {
  background('violet');
  image(img1, (width / 2)-100, height / 2, 40, 40);
  cars.push(new Car());


  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice (i,1);
    }//if
  } // for
} //draw

class Car {
  constructor() {
    this.pos = createVector((width / 2)-80, height / 2);
    this.vel = createVector(random(4,20), random(-.5, 1.5));
    this.r = random(200, 255);
    this.g = random(200, 255);
    this.b = random(200, 255);
    this.a = random(133, 255);
    this.xy = random(20,50);
  } //constructor

  display() {
    fill(this.r, this.g, this.b, this.a, );
    ellipse(this.pos.x, this.pos.y, this.xy);
  } // end methods display

  move() {
    //add velocity to position
    this.pos.add(this.vel);
    this.a = this.a - 5;
    this.xy = this.xy + 5;
    //loop for left right
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    //loop for up down
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = heght;

  } // end methods move
} // end class car
