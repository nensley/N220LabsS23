// Nathan Ensley
// 02/02/23
// N220

//write a function that sets the red component of a color to zero

//defines a variable to represent the function acting on a chosen color
//draws a circle with the new color

//writes a function that sets the red parameter of a color to 0
function removeRed(o){
    o.setRed(0);
    //returns the parameter's value
    return o;
}

function setup(){
    createCanvas(1200,800)
}

function draw(){
   //sets a variable to be the function's value
    let noRed = removeRed(color(170, 200, 150));
    //colors a circle with the the new color
    fill(noRed)
    circle(600, 400, 200);
}