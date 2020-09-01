function setup() {
  createCanvas(400, 400);
}

function draw() {

  if (mouseIsPressed) {
    background('red');}
    else {
      background('blue');
    }

    ellipse(width / 2, height / 2 + 60, 140, 120); //bottom
    ellipse(width / 2, height / 2, 110, 100); //middle
    ellipse(width / 2, height / 2 - 60, 70, 70); //top
  }
