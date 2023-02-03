// Nathan Ensley
// 02/02/23
// N220

//defines canvas size

//draw a car function with x and y as variables
//draws two wheels with 

//runs the p5 draw function
//runs the function that draws the car with the coordinates bound to the mouse's coordinates
//x and y 

//outline the directions to draw one instance of a car
function Car(x,y,d){
    //creates a white car body
    fill(224, 224, 224);
    rect(x-d,y, 100, 50);
    //creates the green racing stripe
    fill(120, 179, 134);
    rect(x-d,y+25, 100, 25);
    //creates the two black wheels of the car
    fill(50,50,50);
    circle(x-d, y+50, 35);
    circle(x+d, y+50, 35);
}


function setup(){
    //defines the canvas size
    createCanvas(800,600);
}

function draw(){
    //sets the background to grey
    background(162, 162, 163);
    //calls the function that draws a car at the location of the mouse
    Car(mouseX,mouseY,50);
}
