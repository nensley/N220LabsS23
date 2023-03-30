// Nathan Ensley
// 03/30/23
// N220

//have a divisibility check function that takes a number input and checks for a remainder
//if no remainder when divided by 7, the function returns true, otherwise false
//have a seperate function run when the screen's button is pressed
//when pressed, that function tests the number with the divisibility check function
//add the result to the page

//extracts the the input from the input box
let numInput = document.getElementById("input")
//extracts the output div from the page
let output = document.getElementById("txt")

//when button is pressed, divisibility check is ran and result is added to the div
function test(){
    //if the divisibility check of the number is true
    if(checkDivisibility(numInput)){
        //then tell, the user that the number is divisible by 7
        output.innerHTML = numInput.value + " is divisible by 7"
    }
    //if the divisibility check of the number is false
    else{
        //then tell the user that the number is not divisible by 7
        output.innerHTML = numInput.value + " is NOT divisible by 7"
    }
}

//checks to see if the input number is divisible by 7
function checkDivisibility(num){
    //if divisible by 7, returns true
    if(num % 7 == 0){
        return true
    }
    //if not divisible by 7, returns false
    else{
        return false
    }
}