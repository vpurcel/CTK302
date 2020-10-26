//let
let numberOfTouches;

function setup() {
  createCanvas(400, 400);

//images
  imageMode(CENTER);
  img1 = loadImage("assets/sleep1.jpg");
  img2 = loadImage("assets/sleep2.jpg");
  img3 = loadImage("assets/sleep3.jpg");
  img4 = loadImage("assets/sleep4.jpg");
//text
  textSize(20);
  fill(255, 0, 0);


} //setup

//draw
function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  //switch touches
  switch (numberOfTouches) {
    case 0:
      background(75);
      text("ZzzZzzzZzzz", 5, 22);
            text("no poking please", 5, 390);
      // picture of sleeping person
      image(img1, width / 2, height / 2, 300, 200);

      break;

    case 1:
      background(125);
      text("Did I feel something?", 5, 22);
                  text("1 poke", 5, 390);
      // drowsy
      image(img2, width / 2, height / 2, 300, 200);

      break;

    case 2:
      background(175);
      text("Please Let me Sleep!", 5, 22);
                  text("2 poke", 5, 390);
      // angry
      image(img3, width / 2, height / 2, 300, 200);
      break;

    case 3:
      background(225);
      text("Ok, Ok I'm awake", 5, 22);
                  text("3 poke", 5, 390);
      // awake

      image(img4, width / 2, height / 2, 300, 200);
      break;


  } //switch

} //draw
