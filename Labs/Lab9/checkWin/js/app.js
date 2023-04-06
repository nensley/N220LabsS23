// Nathan Ensley
// 04/06/23
// N220

//takes input in a comma seperated list
//splits the input at the commas to make an array
//uses a loop to check each element one by one
//if three ones appear in a row, display winner to the page
//if not, display, "not winner" to the page

//extracts the input from the HTML page
let inputString = document.getElementById("input")
//extracts the div elements
let div = document.getElementById("div")

//runs when the button is clicked
function yessir(){
//creates an array of strings by splitting at the commas
let inputArray = inputString.value.split(",");
//changes the array of string to an array of numbers
let numberArray = inputArray.map(Number);
let count = 0
//runs through the arrays' values in a row
for(let i=0;i < numberArray.length; i++){
    for(let j=0;j <= 2; j++) {
        //if a value in the arrays equals 1, it adds 1 to the count
        if(numberArray[i+j] == 1) count++
        //if the next value is not also 1, then it resets the count
        else count = 0
     }
    //if three in a row, then break and display "winner"
    if (count == 3) {
        div.innerHTML = "Winner"
        break
    }
    //if not winner after loops run, then display "not winner"
    else div.innerHTML = "Not Winner"
}
//resets the inputs value
inputString.value = ""
}