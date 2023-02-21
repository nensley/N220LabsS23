//creates a random number and styles the div based on that random number

//extracts the div that sets the danger level
let dangerDiv = document.getElementById("showLevel");

//creates the function that starts on click
function activateEvilPlan(){
    //rounds the random number down
    let randomNumber = Math.floor(Math.random()*10);
    //records the random number in the div
    dangerDiv.innerHTML = randomNumber;
    //changes the div's background color based on the random number

    //for numbers 7, 8, and 9
    if(randomNumber >= 7){
        dangerDiv.style.backgroundColor = "#ff0000"
    }
    //for numbers 5 and 6
    else if(randomNumber > 4){
        dangerDiv.style.backgroundColor = "#ffaa00"
    }
    //for numbers 3 and 4
    else if(randomNumber >2){
        dangerDiv.style.backgroundColor = "#ffea00"
    }
    //for numbers 0, 1, and 2
    else {
        dangerDiv.style.backgroundColor = "#00ff00"
    }

}