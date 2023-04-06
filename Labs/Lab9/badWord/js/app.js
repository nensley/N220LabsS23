// Nathan Ensley
// 04/06/23
// N220

//takes input from the page
//creates an array splitting at spaces
//use a loop to look for specific words
//adds 1 to a tally count if "bad word" detected
//adds an output containing whether there were any bad word found and how many
//resets user input field

//extracts the input from the HTML page
let inputString = document.getElementById("input")
//extracts the div elements
let div = document.getElementById("div")
let div2 = document.getElementById("div2")
//sets the tally at 0
let tally = 0

//runs when the button is clicked
function yessir(){
//creates an array of strings by splitting at the spaces
let inputArray = inputString.value.split(" ");
//checks each element in the array for the bad word
for(i=0; i<inputArray.length; i++){
    //if bad word is contained, then add to the tally
    if(inputArray[i]=="clear"||inputArray[i]=="water"||inputArray[i]=="tires")
    {
        //adds 1 to the tally
        tally += 1
    }
}
console.log(tally)
//if there is at least one bad word
if (tally >= 1){
    //display number of words found
    div.innerHTML = tally + " Bad Word(s) Found"
}
//if no bad words found, then display no bad words found
else div.innerHTML = "No Bad Words Found"
//resets the input box
inputString.value = ""
//resets tally value to 0 for next click
tally = 0
}