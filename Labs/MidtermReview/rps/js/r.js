// Nathan Ensley
// 03/02/23
// N220

//have a function that runs every time a player makes a move (clicks a div)
//have a separate function that generates a random number to get a random computer move
//uses that random number to draw from an array of possible moves
//use the player's move on click to draw from the array of possible moves
//have a conditional statement that checks different combinations of wins and losses
//have a separate function for guard that subtracts 0.5 from the score
//update the scoreboard div based on the result

//sets starting score to 0
let score = 0
//extracts the scoreboard div from the html
let scoreboard = document.getElementById("score")
//extracts the result div from the html
let result = document.getElementById("Result")
//defines an array of possible moves in the game
let moves = ["Rock", "Paper", "Scissors"]
//records the score into the scoreboard div
scoreboard.innerHTML = score

function move(num){
    //runs the function to generate a random computer move
    let computerChoice = computerMove();
    //defines the player move as one of the index
    let playerMove = moves[num];
   //if the player ties the computer
    if(computerChoice == playerMove){
        scoreboard.innerHTML = score
        //defines the result
        result.innerHTML = "You chose " + playerMove + ", Computer chose " + computerChoice 
   }
   //if the player loses to the computer
   else if(computerChoice == "Rock" & playerMove == "Scissors" || computerChoice == "Scissors" & playerMove == "Paper" || computerChoice == "Paper" & playerMove == "Rock"){
        //subtract 1 from the score and update the score
        score = score - 1
        scoreboard.innerHTML = score
        //defines the result
        result.innerHTML = "You chose " + playerMove + ", Computer chose " + computerChoice
   }    
   //if the player beats the computer
   else if(computerChoice == "Rock" & playerMove == "Paper" || computerChoice == "Paper" & playerMove == "Scissors" || computerChoice == "Scissors" & playerMove == "Rock"){
        //adds 1 to the score and updates the score
        score = score + 1
        scoreboard.innerHTML = score
        //defines the result
        result.innerHTML = "You chose " + playerMove + ", Computer chose " + computerChoice
   }
   scoreColor();
}

function computerMove(){ 
    //rounds the random number down to one of the values in the index
     let randomNumber = Math.floor(Math.random()*3);
     //returns the value that the computer chooses
     return moves[randomNumber];
    }

function guard(){
    //subtracts 0.5 from the score and updates the scoreboard
    score = score - 0.5
    scoreboard.innerHTML = score
    //tells the player that they chose guard
    result.innerHTML = "You chose Guard"
    //updates score color
    scoreColor();
}

//changes the background color of the div containing the score based on the score
function scoreColor(){
    //changes score background color to green if score is positive
    if(score>0){
        scoreboard.style.backgroundColor = "#00ff00"
    }
    //changes score background color to red if score is negative
    else if(score<0){
        scoreboard.style.backgroundColor = "#ff0000"
    }
    //changes score background color to grey if score is 0
    else if(score==0){
        scoreboard.style.backgroundColor = "#d4d2d2"
    }
}
