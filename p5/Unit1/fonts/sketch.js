var f1, f2;

function setup() {
  createCanvas(800, 800);

  f1 = loadFont("assets/b.otf");
  f2 = loadFont("assets/c.otf");

  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f1);
  textSize(100);
  text("Seeking", width / 2, height / 2);

  textFont(f2);
  textSize(30);
  text("Justice, Compassion, and Liberty", width / 2, height / 2 + 60);
}
