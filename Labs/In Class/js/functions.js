//create bicycle object
let bicycle = {
age: 0,
wear: 0,
}

//write a function for an object that increases age by year when called
function bikeCreate (obj){
    obj.age++;
    //increases bicycle wear to 100 after 5 or more years
    if(obj.age>=5){
    obj.wear = 100;
    }
}
//runs the function 10 times
bikeCreate(bicycle);
//checks wear to look at conditional statement
console.log(bicycle)
bikeCreate(bicycle);
bikeCreate(bicycle);
bikeCreate(bicycle);
bikeCreate(bicycle);
//checks wear to check that conditional statement has worked
console.log(bicycle)
bikeCreate(bicycle);
bikeCreate(bicycle);
bikeCreate(bicycle);
bikeCreate(bicycle);
bikeCreate(bicycle);

//checks the bicycle age and wear
console.log(bicycle)
