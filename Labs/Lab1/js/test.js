let x=0
let y=0
let z=4
let w=5
function setup(){
   //Sets Canvas Size
    createCanvas(1360, 700);
}
function draw(){
    //Set background to light blue
    background(184, 230, 255);
    
    //Sets Paramters for Car Visuals
    fill(232, 232, 232);
    stroke(84, 84, 84);
    strokeWeight(5);

    //Creates Car Body and Wheels
    rect(x, 300, 100, 50);
    circle(x,350,40);
    circle(x+100,350,40);

    //Changes Car Fill Color to Light Red
    fill(247, 173, 173);

    //Create Car 2 Body and Wheels
    rect(y, 500, 100, 50);
    circle(y,550,40);
    circle(y+100,550,40);

    //Changes Car Direction once car reaches the edge of the canvas
    if(x >= 1250){
        z = -5;
    }
    if(x <= 0){
        z = 4;
    }
    if(y >= 1250){
        w = -4;
    }
    if(y <= 0){
        w = 5;
    }
    //Determines Car 1's Speed
    x = x + z;

    //Determines Car 2's Speed
    y = y + w;
}