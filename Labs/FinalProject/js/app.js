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
win = false;

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
    //
    startSquares[event.target.id] = "X";
}

function addShape(event){
    if(player == 0 && startSquares[event.target.id]=="" && win == false){
        addCross(event);
        player = 1;
        count += 1;
        winCheck();
    }
    else if(player == 1 && startSquares[event.target.id]=="" && win == false){
        addCircle(event);
        player = 0;
        count += 1;
        winCheck();
        console.log(startSquares)
    }
}

function winCheck(){
let winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
] 

for(i=0;i<7;i++){
    if(startSquares[winningCombos[i][0]]=='X' && startSquares[winningCombos[i][1]]=='X' && startSquares[winningCombos[i][2]]=='X') {
        //updates the text below the game
        infoDisplay.innerHTML = "Player 1 (X's) Wins!";
        win = true;
    } 
    else if(startSquares[winningCombos[i][0]]=='O' && startSquares[winningCombos[i][1]]=='O' && startSquares[winningCombos[i][2]]=='O'){
        //updates the text below the game
        infoDisplay.innerHTML = "Player 2 (O's) Wins";
        infoDisplay.style.color = "blue";
        win = true;
    }
    else if(count==9){
        infoDisplay.innerHTML = "Draw, No Winner"
    }

}
}
