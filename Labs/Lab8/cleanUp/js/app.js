// Nathan Ensley
// 03/30/23
// N220

//have a function run when a button is pressed
//this function should take the input and replace all hashtags with blanks
//then output the new word in a div below the input box

//extracts the input from from the html
let input = document.getElementById("input");
//extracts the div element from the page
let output = document.getElementById("txt");

//when button is pressed, all hashtags are removed from the input
function cleanUp(){
    //sets a variable as the input's text
    let word = input.value
    //removes all instances of a hashtag from the input text
    word = word.replaceAll("#", "")    
    //outputs the cleaned up text to the div
    output.innerHTML = word
}