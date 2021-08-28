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

