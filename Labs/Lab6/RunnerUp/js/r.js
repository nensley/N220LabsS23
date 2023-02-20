// Nathan Ensley
// 02/23/23
// N220

//create an array with three times ordered from lowest to highest
//use getElement by ID to extract the different divs
//change the Div inner HTML to the times in the 2nd and 3rd spots of the array

//array holding the top three times
times = [54.23, 55.78, 57.45]

//extract the two divs from the HTML document as variables
let first = document.getElementById("first");
let second = document.getElementById("second")

//modify the size and color for the first div
first.style.width = 50 + "px";
first.style.height = 25 + "px";
first.style.backgroundColor = "#C0C0C0";

//modify the size and color for the second div
second.style.width = 50 + "px";
second.style.height = 25 + "px";
second.style.backgroundColor = "#cd7f32";

//write the runner up times from the array into the divs
first.innerHTML = "<h3>" + times[1] + "</h3>"
second.innerHTML = "<h3>" + times[2] + "</h3>"