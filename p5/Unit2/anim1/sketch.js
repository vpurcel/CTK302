<<<<<<< HEAD
var v = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //rect(v,hieght/2,50,50);
  textSize(100);
  text("zoom", v, mouseY);
  v += 50;

  textSize(20);
  text("use curser on background to zoom", 20, 20);


  if (v > width) {
    v = 0;
  }

}
=======
var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  background(220);
  textSize(20);
  text("I forgot my charger!",x,height/2);
  x+=5
  if (x>width)  {x=-50;}
}
>>>>>>> b2a9ed8eef7187c4afa7d8f35654192b93bdcd1b
