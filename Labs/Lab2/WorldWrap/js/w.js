//defines the starting location of the circle as the far left of the screen
x=0
    function setup(){
        //Sets the Canvas Width to 800 pixels and Canvas Height to 600 pixels
            createCanvas(800,600);
        }
    function draw(){
        background(0,0,0);
        fill("blue");
        //Draws a circle with the x coordinate as a variable
            circle(x,300, 40);
        //If the x coordinate of the circle is less than 800 pixels
            if(x<800){
        //Then, move the circle to the right 5 pixels
            x=x+5;
        }
        //If the x coordinate is greater than 800 pixels
            else{
        //Then, reset the x coordinate to the left side of the screen
            x=0;
    }
}