//defines the coordinates where the mouse is clicked
let click = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //sets the background to gray
    background(220);
  
  if(mouseIsPressed) {
    //start of the line is where the mouse cursor is pressed
    click.x = mouseX;
    click.y = mouseY;
  }
  //defines the line length
  let length = distance(click, { x: mouseX, y: mouseY });
  //checks to see if the line is greater than 120 pixels
  if(length > 120){ 
    //changes the color of the line to red
    stroke("#FF0000");
  } 
  else {
    //the line's inital color is black
    stroke("#000000");
  }
  line(click.x, click.y, mouseX, mouseY);
}

function distance(p1, p2) {
  //calculates x distance of the line
  let dx = p1.x - p2.x;
  //calculates y distance of the line
  let dy = p1.y - p2.y;
  
  //returns the distance
   return Math.sqrt(dx*dx + dy*dy);
}