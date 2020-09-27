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