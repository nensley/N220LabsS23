// Nathan Ensley
// 03/02/23
// N220

//have a function that runs every time any div is clicked to update all of the divs
//reset all divs to default properties
//change the clicked div's elements by identifying it from the id


//function that runs every time a div is clicked
function divChange(num){
    //makes all 6 divs return their default properties
    for(i=1;i<7;i++){
        //changes all of the div's to original settings
        let bro = document.getElementById(i)
        bro.style.backgroundColor = "red";
        bro.style.fontWeight = "normal"
        //for the div that is clicked, change the background color and make text bold
        if(num==i){
            //extratcs the specific div that was clicked
            let bruh = document.getElementById(num);
            //extracts the main div at the top
            let br = document.getElementById("Main");
            //changes the text in the top div to the text of the div that was clicked
            br.innerHTML = bruh.textContent;
            //highlights the div that was clicked
            bruh.style.backgroundColor = "grey";
            bruh.style.fontWeight = "bold";
            
        }   
    }
}