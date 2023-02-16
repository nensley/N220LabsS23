// Nathan Ensley
// 02/16/23
// N220

//Use a conditional state to change the content within a div
//Use document append to concatenate the text "mc" to the text in innerHTML
//Each time, the Div is pressed, it adds another "div" to the end of the text

//extracts the div from the html
let div = document.getElementById("div");
//defines the dimensions of the div
let height = 200
let width = 200
//variable that tracks line location
let i=0

//changes the dimensions of the div to those defined above
div.style.width = width + "px";
div.style.height = height + "px";
//changes text color to yellow and background color to red
div.style.backgroundColor = "#DA291C";
div.style.color = "#FFC72C";


//function that adds a div for every click of the div
function mcDiv(){
    //keeps adding a div to the row until it reaches the end of the div
    if(i<9){
    div.innerHTML += "div"
    i++
    }
    //adds a div to the next row once there is no room
    else{
    div.innerHTML += "<br> div"
    i=1;
    }
}