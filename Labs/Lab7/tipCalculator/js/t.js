// Nathan Ensley
// 02/23/23
// N220

//have a function that selects the input from the document
//have the function run when the button is pressed
//multiply the input by 0.15 to determine tip
//add tip value and input value together
//when the button is pressed, output the tip and total in to the console

//runs the function when the button is pressed
function press(){
    //grabs the input from the document
    let input = document.querySelector("#userInput");
    //calculates the tip
    let tip = input.value*0.15;
    //changes the input's value to a number
    let subtotal = Number(input.value)
    //calculates the total by adding tip and subtotal
    let total = subtotal + tip 
    //logs the tip and total to the log
    console.log("Tip: $" + tip + ". Total: $" + total)
}