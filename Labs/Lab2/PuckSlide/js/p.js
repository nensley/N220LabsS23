let fillcolor="red"
function setup(){
    //Sets the Canvas Size to 400x300
        createCanvas(400,300);
}

function draw(){
    //Sets a Black Background
        background(0,0,0);  
    //Changes the Color Fill of the Circle to be a variable
        fill(fillcolor);
    //Draws a circle at Mouse X and Y
        circle(mouseX, mouseY, 30);
    //If the x coordinate of the mouse location is greater than 200 pixels
        if(mouseX>200){
        //Then, the variable determining the circle's color will be red
            fillcolor="red";
        }
    //If the x coordinate of the mouse location is less than 200 pixels
        else{
    //Then, the variable determining the circle's color will be blue
        fillcolor="blue";
        }
}