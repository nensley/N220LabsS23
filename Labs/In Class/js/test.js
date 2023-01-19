let z = 5
function setup(){
    createCanvas(1360, 700);
}

function draw(){
    //if you click, the radius of the circle will increase
    //if below 50 pixels, the radius will continue increasing 
  background(100,255,255)
    circle(mouseX, mouseY, z)
    if (mouseIsPressed&&z<=50){
        z++
    }
  }
