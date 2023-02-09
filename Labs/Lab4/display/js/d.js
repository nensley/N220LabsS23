// Nathan Ensley
// 02/09/23
// N220

//creates an object with a defined width, height, color, and position

//draws the object using the information in the inital object

//create a function with one argument
//send the object through the function to redefine elements

//creates an object with a defined size and position
let obj = {
    //defines color and size for middle ring
    radius: 200,
    color: 115,
    //defines position
    x: 400,
    y: 300,
    //defines color and size for outer ring
    outerColor: 55,
    outerRadius: 300,
    //defines color and size for inner ring
    innerColor: 175,
    innerRadius: 100
}

function setup(){
    createCanvas (800, 600)
}

function draw(){
   background(0);
    //draws the outer ring
    fill(obj.outerColor);
    circle(obj.x, obj.y, obj.outerRadius);
    //draws the middle ring
    fill(obj.color);
    circle(obj.x, obj.y, obj.radius);
    //draws the inner ring
    fill(obj.innerColor)
    circle(obj.x,obj.y, obj.innerRadius);
}
