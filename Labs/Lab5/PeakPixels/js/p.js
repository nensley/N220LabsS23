// Nathan Ensley
// 02/16/23
// N220

//stores height and width as a variable
//add a function, on click, height and width are updated to increase by 10%

//extracts the div from the html
let squareDiv = document.getElementById("square")
//holds numerical values for each of the dimensions of the div
let height = 100;
let width = 100;
//makes the div green and sets its size
squareDiv.style.width = width + "px";
squareDiv.style.height = height + "px";
squareDiv.style.backgroundColor = "green";

//increases the height and width by 10% every click
function increase(){
    height *= 1.1;
    width *= 1.1;
    //resets the div's size
    squareDiv.style.width = width + "px";
    squareDiv.style.height = height + "px";
}
