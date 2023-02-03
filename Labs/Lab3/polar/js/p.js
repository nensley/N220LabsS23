// Nathan Ensley
// 02/02/23
// N220

//Set a variable to represent the polar point
//Write a function where x and y variables are determined by the polar point times the sin of the mouse's x or y position
//Use the x and y coordinates to create a vector

//set a varible equal to calling the polar point function
//Add a translate
//Draw a circle at the x and y points of that variable with a radius of 10

//creates a function that calculates the polar points
function polarPoint(r){
    let x = r*Math.sin(mouseX);
    let y = r*Math.cos(mouseX);
    return createVector(x,y);
}
function setup(){
    createCanvas(900,600)
}

function draw(){
    //calls the polar function
    let res = polarPoint(40);
    translate(100,100);
    //draws a black circle at a polar coordinate
    fill("black")
    circle(res.x,res.y,10);
}