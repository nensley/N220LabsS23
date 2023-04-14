// Nathan Ensley
// 04/13/23
// N220

//add event listeners to each button
//when button is clicked, run a seperate function
//the function grabs the answer attribute from the button
//then adds the answer data attribute into the div below

//extracts buttons from page
let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2")
let button3 = document.getElementById("btn-3")
//extracts divs from the page
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
//adds an event listener listening for a click
button1.addEventListener("click",answer)
button2.addEventListener("click",answer2)
button3.addEventListener("click",answer3)
//when button 1 is clicked, add answer to div below
function answer(event){
    //gets the data attribute's value of the clicked div
    let answer = event.target.getAttribute("data-answer")
    //changes background color of clicked div
    div1.innerHTML = answer
}
//when button 2 is clicked, add answer to div below
function answer2(event){
    //gets the data attribute's value of the clicked div
    let answer = event.target.getAttribute("data-answer")
    //changes background color of clicked div
    div2.innerHTML = answer
}
//when button 3 is clicked, add answer to div below
function answer3(event){
    //gets the data attribute's value of the clicked div
    let answer = event.target.getAttribute("data-answer")
    //changes background color of clicked div
    div3.innerHTML = answer
}