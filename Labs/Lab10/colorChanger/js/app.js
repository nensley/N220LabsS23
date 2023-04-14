// Nathan Ensley
// 04/13/23
// N220

//add an event listener for each div listening for a click
//when the div is clicked, run a function
//the function chnages the background color based on the data attribute of the clicked div

//extract the three divs from the page
div1 = document.getElementById("btn-1")
div2 = document.getElementById("btn-2")
div3 = document.getElementById("btn-3")

//for each div, have an event listener that runs the change color 
//function when the div is clicked
div1.addEventListener("click", changeColor)
div2.addEventListener("click", changeColor)
div3.addEventListener("click", changeColor)

//function that changes background color to data attribute's value
function changeColor(event){
    //gets the data attribute's value of the clicked div
    let color = event.target.getAttribute('data-attribute')
    //changes background color of clicked div
    event.target.style.backgroundColor = color;
}