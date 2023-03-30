// Nathan Ensley
// 03/30/23
// N220

//have a button that runs a function when pressed
//a seperate function should run the math random function to generate a number between 0 and 1
//multiply this random number by 11 to get a number between 1 and 10 when the number is rounded down
//add the random number to the page in a div

//extracts the div from the html document
output = document.getElementById("txt")

//generates random number from 1 to 10
function randomGen(){
    return (Math.floor(Math.random() * 11))
}

//puts the random number in the div when the button is pressed
function random(){
    //runs the random generating number function and adds the result to the div
    output.innerHTML = randomGen();
}