var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  //rect(v,height/2,50,50);
//  textSize(100);
//  text("zoom", v, mouseY);
ellipse(250,x,50,50);
  x += 5;

//

  if (x > height) {
    x = 0;
  }

}
