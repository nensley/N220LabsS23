let i = 0;
let growing = true;
function setup(){
    createCanvas(1360, 700);
}
function draw(){
    background(255);
    circle(500,300,i);
    if(i<400&&growing==true) {
        i++;
    }
    else {
        growing = false;
    }
    if(i!=0&&growing==false) {
        i--;
    }
    else {
        growing = true;
    }
}