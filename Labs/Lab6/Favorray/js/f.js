// Nathan Ensley
// 02/23/23
// N220

//create a array with five favorite things
//write a loop that goes through each spot in the array
//add the thing to an individual div and adding to an existing string

//creates an array of favorite things
let favorites = ["Photography", "Tennis", "Show Choir", "Math", "Badminton"]

//extracts the div element from the HTML
let Div = document.getElementById("div")

//define the div's size and color
Div.style.width = 300 + "px";
Div.style.height = 100 + "px";
Div.style.backgroundColor = "#45d98f";

//writes a loop that runs five times
for(i=0; i<5; i++){
    //writes the array item based on the iterand and adds a string afterwards
    Div.innerHTML +=  favorites[i] + ", is one of my favorite things <br>"
}