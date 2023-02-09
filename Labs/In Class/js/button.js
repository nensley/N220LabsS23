function checkResponse(time) {
    //if time is... the current time (for this lab)
    if (time == "morning"){
        document.getElementById("cor").innerHTML = ("That is correct");
    }
        //then display "That is correct" in another div
    else{
        document.getElementById("cor").innerHTML = ("Guess Again")
    }
    //Otherwise
        // display "Guess again" in another div
}