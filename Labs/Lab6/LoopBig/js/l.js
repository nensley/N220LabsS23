// Nathan Ensley
// 02/23/23
// N220

//Write a For Loop that starts at 1000
//Increases by 1000 until the variable in the loop is less than 6000
//Uses InnerHTML to write this variable into the Div 

//Extract the div from the HTML
let Div = document.getElementById("div")

//define the div's size and color
Div.style.width = 50 + "px";
Div.style.height = 100 + "px";
Div.style.backgroundColor = "grey";

//increases iterand by 1000 until iterand is greater than or equal to 6000
for(i=1000; i<6000; i+=1000){
    //writes the iterand in the Div and adds a space afterwards
    Div.innerHTML += i + "<br>";
}