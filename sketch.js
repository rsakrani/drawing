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
}
function bullseye(0, 50, 200, 4, Red, Green) {
  noStroke();
  fill(color1);
  circle(x, y, d);
  fill(color2);
  circle(x, y, (2/3)*d);
  fill(color3);
  circle(x, y, (1/3)*d);
}
}
