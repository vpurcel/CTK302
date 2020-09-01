function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  background(150, 150, 220);
  noStroke();


  fill(255, 255, 125);
  ellipse(0, 0, 500, 500);

  fill(255, 255, 100);
  ellipse(0, 0, 300, 300);

  fill(255, 255, 50);
  ellipse(0, 0, 200, 200);

  fill(0, 140, 0);
  arc(360, 500, 900, 400, PI, TWO_PI);

  fill(10, 120, 10);
  rect(320, 300, 700, 400);

  fill(102, 0, 0);
  rect(280, 80, 40, 300);

  fill(140, 175, 140);
  triangle(300, 20, 300, 240, 200, 300);

  fill(130, 155, 130);
  triangle(300, 20, 300, 240, 400, 300);
}
