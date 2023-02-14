/*
//while loop runs until the condition is false
let i = 0

while(i < 5){
    console.log(i);
    i++;
}
*/

/*
//For Loop (Declare Variable; Condition; Update Variable's Value)
for(let i=0; i < 5; i++)
{
   console.log(i)
}
*/

/*  
    Arrays are a collection of variables. 
    Supplying the index to the arrary will return the variable/value at the index value
    Indexes start at 0
*/

let myArray = ["sport","coat","sky","spoon","dog"];
let myEmptyArray = [];

myArray[0]; //1

//Change Array Value
myArray[0] = "laser";

/*
//Reads out each array location and then value at the array
for(let i=0; i < 5; i++){
    console.log(i);
    console.log(myArray[i]);
}
*/

//draws the array to the page in different divs
for(let i=0; i < myArray.length; i++){
    let newElement = document.createElement("p");
    newElement.innerHTML = myArray[i];
    document.body.appendChild(newElement);
}
