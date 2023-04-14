// Nathan Ensley
// 04/13/23
// N220

//have three numerical variables for red, green, and blue
//have a function that activates when the divs are clicked
//look at a data attribute to determine what to do next
//add a number to one of the color variables based on a data attribute
//update the background color of the color div based on the color variables
//update the display div with the current color

//extracts the color changing div and display div from the page
let colorDiv = document.getElementsByClassName("backdiv")[0];
let div = document.getElementsByClassName("updatediv")[0];
//setting color variables to start at black
let green = 0;
let blue = 0;
let red = 0;

//function runs when any div is clicked
function clicked(event){
    //if the data-color is red
    if(event.target.dataset.color == "red"){
        //adds to the red variable based on the data attribute
        red += Number(event.target.dataset.attribute)
    }
    //if the data-color is green
    if (event.target.dataset.color == "green"){
        //adds to the green variable based on the data attribute
        green += Number(event.target.dataset.attribute)
    }
    //if the data-color is blue
    if(event.target.dataset.color == "blue"){
        //adds to the blue variable based on the data attribute
        blue += Number(event.target.dataset.attribute)
    }
    //changes the background color of the main div based on the color variables 
    colorDiv.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
    //updates the div to show current color
    div.innerHTML = "current color: rgb(" + red + "," + green + "," + blue + ")"
}

