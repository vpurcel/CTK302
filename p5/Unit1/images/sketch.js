var img1, img2, img3 ;

function setup() {
createCanvas(800,800);
imageMode(CENTER);
  img1 = loadImage("assets/blmphoto.jpg");
  img3 = loadImage("assets/hahphoto.jpg");
  img2 = loadImage("assets/trohoto.jpg");

}

function draw() {

  image(img2, width / 2, height / 2, 250, 160);
  image(img1, width / 2, height / 2 + 160, 250,160);
  image(img3, width / 2, height / 2 - 160, 250,160);
}
