// Nathan Ensley
// 02/02/23
// N220

//create two tall rectangles as objects with position and size defined
//Each rectangle will be drawn on opposite sides of the screen

//draw both of the rectangles using the draw function
//if up key is pressed, then move obj 1 up and obj 2 down
//if down key is pressed, then move obj 1 down and obj 2 up

//sets the location and size of the left rectangles
let objL = {
    x: 10,
    y: 170,
    height: 60,
    width: 10,
}

//sets the location and size of the right rectangle
let objR = {
    x: 580,
    y: 170,
    height: 60,
    width: 10, 
}

function setup(){
    createCanvas(600, 400);
}

function draw(){
    //sets the background to black
    background(0);
    //draws the court background
    strokeWeight(4);
    stroke(255);
    noFill();
    rect(50, 50, 500, 300);
    rect(290, 50, 3, 300);

    //if the up arrow is pressed
    if (keyIsDown(UP_ARROW)) {
        //then move the left rectangle up and the right rectangle down
        objL.y = objL.y-1.5;
        objR.y = objR.y +1.5;
      }
    //if the down arrow is pressed
      if (keyIsDown(DOWN_ARROW)) {
        //then move the left rectangle down and the right rectangle up
        objL.y = objL.y+1.5;
        objR.y = objR.y-1.5;
      }
    //draws two white rectangles at the coordinates defined by the object
      fill(255);
    rect(objL.x, objL.y, objL.width, objL.height);
    rect(objR.x, objR.y, objR.width, objR.height);
}

