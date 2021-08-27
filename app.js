"use strict"

let destinations = ["NYC", "Paris", "New Zealand", "San Diego", "Spain"];
let restaurants = ["Fine Dining", "a Classic Dinner", "a Food Truck", "Fast Food", "Packed Lunch"];
let modeOfTransportation = ["Walking", "a Taxi", "a Bicycle", "a Sccoter", "a Trolley"];
let formOfEntertainment = ["Sight Seeing", "a Museum", "the Zoo", "a City Park", "Amusement Park"];

function randomItems(arrayOfThings){
    return arrayOfThings[Math.floor(Math.random()*arrayOfThings.length)];
}

let place = randomItems(destinations);
console.log(place);

let typeOfFood = randomItems(restaurants);
console.log(typeOfFood);

let typeOfTransportation = randomItems(modeOfTransportation);
console.log(typeOfTransportation);

let funThingsToDo = randomItems(formOfEntertainment);
console.log(funThingsToDo);

