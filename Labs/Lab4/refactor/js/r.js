// Nathan Ensley
// 02/02/23
// N220

//create an object to store the ball's size, color, and velocity

//use the draw function to draw the ball

//If the x coordinate of the circle is less than 800 pixels
//Then, move the circle to the right 5 pixels

//If the x coordinate is greater than 800 pixels
//Then, reset the x coordinate of the object to the left side of the screen

//defines the elements of a ball
let ball = {
    //sets the location of the ball
    x: 50,
    y: 200,
    //sets the size of the ball
    radius: 50,
    //sets the velocity of the ball
    velocity: 5,
    //sets the color of the ball
    r: 79,
    g: 136,
    b: 227,
}

function setup(){
    //creates the canvas
   createCanvas(600, 400);
}

function draw(){
    //draws a black background
    background("black")
    //creates a circle with the object's specifications
    fill(ball.r, ball.g, ball.b);
    circle(ball.x, ball.y, ball.radius);
    //if the ball 
    if(ball.x<=600){
        ball.x = ball.x + ball.velocity;
    }
    //if the ball hits the right side of the screen
    else{
        //then set the ball to the left side of the screen
        ball.x= 0;
    }
}