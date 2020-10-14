
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
