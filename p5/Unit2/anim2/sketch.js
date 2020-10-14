
var x = 0;

//var
function setup() {
  createCanvas(400, 400);
}

function draw() {
            noStroke()
  // background
  if (mouseIsPressed) {
    background('yellow');
  } else {
    background('grey');
  }
  
  
  push();
  translate (x,0);

  
 //body
    if (mouseIsPressed) {


          fill(204, 0, 153);
      rect(100, 255, 200, 145);


  quad(25, 300, 145, 230, 200, 385, 100,355);
  quad(375, 300, 255, 230, 200, 385, 300,355);

    fill(255, 102, 255);
    triangle(25, 300, 100, 25, 80, 266);
    triangle(375, 300, 300, 25, 320, 266);
//hands
      circle(100,40,40);
        circle(300,40,40);


//bread

               fill(128, 0, 0);
      arc(175, 45, 80, 80, 0, PI , CHORD);
      arc(225, 45, 80, 80, 0, PI , CHORD);
       fill(153, 51, 0);
              circle(160,50,50);
              circle(200,50,50);
              circle(240,50,50);



  } else {
               fill(204, 0, 153);
    rect(100, 225, 200, 175);
  quad(25, 265, 145, 200, 200, 355, 100,325);
  quad(375, 265, 255, 200, 200, 355, 300,325);

    fill(255, 102, 255);
    triangle(25, 265, 100, 600, 80, 235);
    triangle(375, 265, 300, 600, 320, 235);
      }
  // Character head

               fill(255, 102, 255);
    if (mouseIsPressed) {
  ellipse(width / 2, height / 2+50, 160, 180);
  } else {
    ellipse(width / 2, height / 2-50, 160, 180);
  }
  //eyeball and mouth color
    fill(255);
  // the mouth
  if (mouseIsPressed) {
    arc(200, 210, 90, 50, 0, PI);
  } else {
    arc(200, 210, 70, 10, PI, 0);

  }
 if (mouseIsPressed) {
  // the eyes
  ellipse(170, 185, 40, 20);
  ellipse(230, 185, 40, 20);

//pupil cplor
    fill(255, 255, 0);
  circle(170, 180, 10);
  circle(230, 180, 10);


      //lazers
            stroke(255, 0, 0);
      strokeWeight(4);
      line(170, 180, 165, 100);
      line(230, 180, 235, 100);
    noStroke()

   textSize(32);
   fill(255, 0, 0);
            stroke(255, 153, 51);
text('BREAD RAY', 110, 130);
       strokeWeight(6)


 } else {
       // the eyes
  ellipse(170, 180, 40, 20);
  ellipse(230, 180, 40, 20);



//pupil cplor
    fill (15);
circle(170, 185, 10);
circle(230, 185, 10);
   }

    fill(255, 102, 255);
  pop();
  
  x=x+2;
  if (x > width) {
  x=-400;}
}
