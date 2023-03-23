// Nathan Ensley
// 02/23/23
// N220

//have a function that selects the input from the document
//have the function run when the button is pressed
//when the button is pressed, output "Hello" and the input's value into the console

//function runs when button is clicked
function press(){
    //grabs the input from the document
    let input = document.querySelector("#userInput");
    //outputs "Hello" and the input's value to the console
    console.log("Hello " + input.value)
}