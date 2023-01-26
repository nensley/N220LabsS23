//sets circle radius to 1 pixel
    let i = 1;
function setup(){
    //sets canvas size
    createCanvas(1350, 700);
}
function draw(){
    background(255);
    //draws circle in center of screen with a variable radius
    circle(675,350,i);
    //limits circle's radius size to a max of 200 pixels
    if(i<=200) {
        i++;
    }
    else {
        i=1;
    }
}