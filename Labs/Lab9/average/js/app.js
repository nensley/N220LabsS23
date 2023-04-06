// Nathan Ensley
// 04/06/23
// N220

//takes a comma seperated user input from HTML
//makes this list into an array
//changes this array of strings to an array of numbers
//loop through array's values
//use the loop to find the sum and average
//output the average and sum in a visible div on the page
//resets the input box on the page


//extracts the input from the HTML page
let inputString = document.getElementById("input")
//extracts the div elements
let div = document.getElementById("div")
let div2 = document.getElementById("div2")
//sets sum value to 0
let sum = 0

//runs when the button is clicked
function yessir(){
//creates an array of strings by splitting at the commas
let inputArray = inputString.value.split(",");
//changes the array of string to an array of numbers
let numberArray = inputArray.map(Number);
//adds the value of each element in the array to compute the sum
for(i=0;i<numberArray.length;i++){
    sum += numberArray[i] 
}
//calculates the average
let average = sum / numberArray.length
//logs the sum and average to the divs on the page
div.innerHTML= "Sum: " + sum;
div2.innerHTML = "Average: " + average
//resets the inputs value
inputString.value = ""
}