// Nathan Ensley
// 02/23/23
// N220

//include a number as a global variable
//have a function that selects the input from the document
//have the function run when the button is pressed
//run an if statement to check how close the user input is to the number
//log the result in a paragraph below the input box
//reset the input's value

//number needing to be guessed
number = 13
//runs the function when the button is pressed
function press(){
    //grabs the input from the document
    let input = document.querySelector("#userInput");
    //grabs the text box below the input to give user an update
    let result = document.getElementById("result")
    //if the number guessed is too low
    if(input.value<number){
        result.innerHTML = "Too Low, Guess Again"
        //resets the input box
        input.value = ""
    }
    //if the number guessed is too high
    else if(input.value>number){
        result.innerHTML = "Too High, Guess Again"
        input.value = ""
    }
    //if the number guessed is correct
    else if(input.value==number){
        result.innerHTML = "Congrats! You chose the correct number"
        input.value = ""
    }
}