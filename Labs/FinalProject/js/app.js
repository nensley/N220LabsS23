//extracts the board element from the HTML
let board = document.getElementById("board");
//extracts the info display from the HTML
let infoDisplay = document.getElementById("display");
//creates an array of empty elements that will be used to make the squares
let startSquares = [
    "", "", "", "", "", "", "", "", ""
]
//starts variable for player at 0
let player = 0
//starts starting count for number of moves at 0
count = 0
//sets win condition to false to change when a player wins
win = false;
let button = document.getElementById("btn");

//creates the gameboards and adds properties to all of
//the boxes of the gameboard
function createSquares(){
    //for each empty element, 
    startSquares.forEach((_box, index) => {
        //creates nine divs
        let boxElement = document.createElement('div')
        //adds the square class to every div
        boxElement.classList.add('square')
        //adds an id to each box to extract later based on its index
        boxElement.id = index
        //runs the function add shape when the box is clicked
        boxElement.addEventListener('click', addShape)
        //adds each box to the board
        board.append(boxElement)
    })
}
//runs the function to create the gameboard of nine boxes
createSquares();

//defining the functions that add a circle and a cross
//this function adds a circle to the selected game box
function addCircle(event){
    //creates a circle using css and adds to selected square
    let circle = document.createElement('div');
    circle.classList.add('circle');
    event.target.append(circle);
    //changes the index of the selected square to O
    startSquares[event.target.id] = "O";
}
//this function adds a cross to the selected game box
function addCross(event){
    //adds a cross to the selected game box
    let cross = document.createElement('img');
    cross.classList.add('cross');
    cross.src = 'x.svg';
    event.target.append(cross);
    //changes the index of the selected square to X
    startSquares[event.target.id] = "X";
}
//adds a Cross or a Circle depending on which player's turm
function addShape(event){
    //if the player is 0, the selected square is empty, and a player hasn't won
    if(player == 0 && startSquares[event.target.id]=="" && win == false){
        //adds a cross to the selected box
        addCross(event);
        //changes player to the other player
        player = 1;
        //adds one to the count
        count += 1;
        //runs the win check before the next click can be taken
        winCheck();
    }
    //if the player is 1, the selected square is empty, and a player hasn't won
    else if(player == 1 && startSquares[event.target.id]=="" && win == false){
        //adds a circle to the selected box
        addCircle(event);
        //changes player back to 0
        player = 0;
        //adds one to the count
        count += 1;
        //runs the win check before the next click can be taken
        winCheck();
    }
}
//defines the win check function which checks all winning combos
function winCheck(){
//defines all winning combos based on starting array
let winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
] 
//runs through each winning combo possibility
for(i=0;i<7;i++){
    //if a winning combo array has X's in every spot
    if(startSquares[winningCombos[i][0]]=='X' && startSquares[winningCombos[i][1]]=='X' && startSquares[winningCombos[i][2]]=='X') {
        //updates the text below the game
        infoDisplay.innerHTML = "Player 1 (X's) Wins!";
        //changes the win condition to true
        win = true;
        //shows the reset button
        button.style.visibility = "visible";
    } 
    //if a winning combo array has O's in every spot
    else if(startSquares[winningCombos[i][0]]=='O' && startSquares[winningCombos[i][1]]=='O' && startSquares[winningCombos[i][2]]=='O'){
        //updates the text below the game
        infoDisplay.innerHTML = "Player 2 (O's) Wins";
        //changes the display text color to blue
        infoDisplay.style.color = "blue";
        //changes the win condition to true
        win = true;
        //shows the reset button
        button.style.visibility = "visible";
    }
    //if nine moves have been made
    else if(count==9){
        //displays that a draw has taken place
        infoDisplay.innerHTML = "Draw, No Winner"
        //shows the reset button
        button.style.visibility = "visible";
    }
}
}
//resets the game board when button is pressed
function reset(){
    //runs a loop to reset each box and the starting array
    for(i=0;i<=8;i++){
        //grabs each box on the gameboard
        let element = document.getElementById(i);
        //resets the starting square array to not include any letters
        startSquares[i] = "";
        //if the box has elements has elements inside it
        if (element.children.length > 0) {
            //remove those elements
            element.children[0].remove()
        }
    }
    //reset the win condition to false
    win = false;
    //reset player to 0, which is the starting player
    player = 0;
    //resets move count to 0
    count = 0;
    //resets the display box to nothing
    infoDisplay.textContent=""
    //hides the button from user view
    button.style.visibility = "hidden"
}