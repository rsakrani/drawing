var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
   if (mouseIsPressed) {
    fill(255, 255, 255);
  }
  ellipse(mouseX, mouseY, 100, 100);
  myRed = myRed + 0.5;
  if (myRed > 255); {
    myRed = 0;
  }
  myBlue = myBlue - 1;
  if (myBlue <= 0) {
    myBlue=255;
  }
