// Nathan Ensley
// 02/16/23
// N220

//change the style of the div
//when mouse hovers over, change the div's color to black
//when the mouse is not over the div, change the div's color back to blue

//extracts the div from the html
let squareDiv = document.getElementById("square")
//makes the div blue and sets its dimensions
squareDiv.style.width = 100 + "px";
squareDiv.style.height = 100 + "px";
squareDiv.style.backgroundColor = "blue";
//when the mouse hovers over, the div's color changes to black
function mouseOver(){
    squareDiv.style.backgroundColor = "black";
}
//when the mouse goes away from the div, the div's color changes to blue
function mouseOut(){
    squareDiv.style.backgroundColor = "blue";
}