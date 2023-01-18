let x=0
let y=0
function setup(){
    createCanvas(1360, 700);
}
function draw(){
    x = x+4
    y = y+4.5
    background(184, 230, 255)
    fill(232, 232, 232)
    stroke(84, 84, 84)
    strokeWeight(5)
    rect(x, 300, 100, 50);
    fill(247, 173, 173)
    stroke(84, 84, 84)
    strokeWeight(5)
    rect(y, 500, 100, 50);
    if(x > 1250){
        x=1250
    }
    if(y > 1250){
        y=1250
    }
}