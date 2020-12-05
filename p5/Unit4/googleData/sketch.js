var bubbles = [];

function setup() {


  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1C6AJ5OSskAD7q2Hyep7gUwBJKpKnBQmkM8E0p2bXFT4'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 1000);
  imageMode(CENTER);
    img1 = loadImage("assets/arena.jpg");
    img2 = loadImage("assets/topia.png");
    img3 = loadImage("assets/tsim.jpg");
    img4 = loadImage("assets/yucata.jpg");
    img5 = loadImage("assets/board.jpg");

  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Service, data[i].Boardgame,data[i].Name)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('pink');
  image(img5, 500, 500, 1000, 1000);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
        bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myService, myBoardgame, myName) {

    this.service = myService; //this.name = myName;
    this.boardgame = myBoardgame; //    this.shape = myShape;
    this.name = myName; //this.name = myName;
    this.pos = createVector(random(width), random(height));

  }


  display() {
    if (this.service == "Tabletop Simulator") {
     image(img3, this.pos.x, this.pos.y-60, 70, 40);
     }
     if (this.service == "Boardgame Arena") {
      image(img1, this.pos.x, this.pos.y-60, 70, 40);
      }
      if (this.service == "Yucata") {
       image(img4, this.pos.x, this.pos.y-60, 70, 40);
       }
       if (this.service == "Tabletopia") {
        image(img2, this.pos.x, this.pos.y-60, 70, 40);
        }


    text(this.service, this.pos.x, this.pos.y - 20);
    text(this.boardgame, this.pos.x, this.pos.y + 20);
    text(this.name, this.pos.x, this.pos.y);
  }
drive() {
this.pos.x += 1;
if (this.pos.x>width) this.pos.x=0;
}

}
