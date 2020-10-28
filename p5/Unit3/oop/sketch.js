var myCar; // Declare object

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object
  myCar = new Car();

} //setup

function draw() {
  background(100);

  // do some actions on the object
  myCar.display();
  myCar.move();

} //draw



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.x = 0;
  } //constructor

  // methods

  display() {
    rect(this.x, 100, 50, 25);
  } //methods display

  move() {
    this.x = this.x + 1;
  } //methods move

} // class car
