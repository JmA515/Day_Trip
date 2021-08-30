"use strict"

let destinations = ["NYC", "Paris", "New Zealand", "San Diego", "Spain"];
let restaurants = ["Fine Dining", "a Classic Dinner", "a Food Truck", 
"Fast Food", "Packed Lunch"];
let modeOfTransportation = ["Walking", "a Taxi", "a Bicycle", 
"a Scooter", "a Trolley"];
let formOfEntertainment = ["Sight Seeing", "a Museum", "the Zoo", 
"a City Park", "Amusement Park"];

function randomItems(arrayOfThings){
    return arrayOfThings[Math.floor(Math.random()*arrayOfThings.length)];
}

let userInput;
let userInput2;
let userInput3;
let userInput4;
let userInput5;

let place;
let typeOfFood;
let typeOfTransportation;
let funThingsToDo;

while(userInput != "yes"){
    place = randomItems(destinations);
    userInput = prompt(`Would you like to go to ${place}? Yes or no.`);
}

while(userInput2 != "yes"){
    typeOfFood = randomItems(restaurants);
    userInput2 = prompt(`Would you like to go to ${typeOfFood}? Yes or no.`);
}

while(userInput3 != "yes"){
    typeOfTransportation = randomItems(modeOfTransportation);
    userInput3 = prompt(`Would you like to go by ${typeOfTransportation}? Yes or no.`);
}

while(userInput4 != "yes"){
    funThingsToDo = randomItems(formOfEntertainment);
    userInput4 = prompt(`Would you like to go ${funThingsToDo}? Yes or no.`);
}

//  Initial selections.

// console.log(place);
// console.log(typeOfFood);
// console.log(typeOfTransportation);
// console.log(funThingsToDo);

userInput5 = prompt("You're destination is" + place + "." +
 "You're type of dining is" + typeOfFood + "." +
 "You're mode of transportation will be" + typeOfTransportation + "." +
 "And you will be enjoying" + funThingsToDo + "." +
 "Are you happy with the current selection? Yes or No.");

if(userInput5 != "yes"){
    let changeLocation;
    let changeFood;
    let changeTransportation;
    let changeFun;

    let confirmPlace;
    let confirmFood;
    let confirmTransportation;
    let confirmFun;

    changeLocation = prompt("Do you want to change your destination?");
    if(changeLocation == "no"){
    }
    else if(confirmPlace != "no"){
        while(confirmPlace != "yes"){
            place = randomItems(destinations);
            confirmPlace = prompt(`Would you like to go to ${place}? Yes or no.`);
        }
    }

    changeFood = prompt("Do you want to change your food?");
    if(changeFood == "no"){
    }
    else if(confirmFood != "no"){
        while(confirmFood != "yes"){
            typeOfFood = randomItems(restaurants);
            confirmFood = prompt(`Would you like to go to ${typeOfFood}? Yes or no.`);
        }
    }

    changeTransportation = prompt("Do you want to change your transportation?");
    if(changeTransportation == "no"){
    }
    else if(confirmTransportation != "no"){
        while(confirmTransportation != "yes"){
            typeOfTransportation = randomItems(modeOfTransportation);
            confirmTransportation = prompt(`Would you like to go to ${typeOfTransportation}? Yes or no.`);
        }
    }

    changeFun = prompt("Do you want to change your entertainment?");
    if(changeFun == "no"){
    }
    else if(confirmFun != "no"){
        while(confirmFun != "yes"){
            funThingsToDo = randomItems(formOfEntertainment);
            confirmFun = prompt(`Would you like to go to ${funThingsToDo}? Yes or no.`);
        }
    }
    console.log(`Here is your confirmed Day Trip. You're destination is ${place}.
You're type of dining is ${typeOfFood}. You're mode of transportation will 
be ${typeOfTransportation}. And you will be enjoying ${funThingsToDo}.`);
}
else{
    console.log(`Here is your confirmed Day Trip. You're destination is ${place}.
You're type of dining is ${typeOfFood}. You're mode of transportation will 
be ${typeOfTransportation}. And you will be enjoying ${funThingsToDo}.`);
}

//  Final selections with changes if any.

// console.log(place);
// console.log(typeOfFood);
// console.log(typeOfTransportation);
// console.log(funThingsToDo);