// Nathan Ensley
// 02/23/23
// N220

//write a for loop with a variable starting at 1 and running 25 times
//write multiple conditional steps that check for divisibility
//each conditional statement will check to see if the remainder is 0
//if the remainder is 0, then change the iterand to "beep" or "bop"
//first conditional statement tests whether divisibility by 3 AND 5 is true

//Extract the div from the HTML
let Div = document.getElementById("div")

//define the div's size and color
Div.style.width = 60 + "px";
Div.style.height = 470 + "px";
Div.style.backgroundColor = "grey";

//counts from 1 to 25
for(i=1; i<26; i++){
    //if the variable is divisible by 5 and 3
    if(i%15 == 0){
        //write beepbop in the div
        Div.innerHTML += "beepbop <br>"
    }
    //if the variable is divisible by just 5
    else if(i%5 == 0){
        //write bop in the div
        Div.innerHTML += "bop <br>"
    }
    //if the variable is divisible by 3
    else if(i%3 == 0){
        //write beep in the div
        Div.innerHTML += "beep <br>"
    }
    //if the variable is not divisible by 3 or 5
    else{
        //write the variable's numerical value in the div
        Div.innerHTML += i + "<br>"
    }

}