"use strict";

//Array review
let stateInfo = [
  {
    state: "California",
    cities: ["San Diego", "San Francisco", "Santa Barbara", "Monterey", "Redwood City"],
  },
  {
    state: "Maryland",
    cities: ["Leonardtown", "St Leonard", "St Mary's City", "Annapolis", "Ocean City"],
  },
  {
    state: "Texas",
    cities: ["San Antonio", "Austin", "Pflugerville", "Dallas", "Ft Worth", "Paris", "Athens"],
  },
];

// console.log("I live in " + stateInfo[2].cities[4] + " " + stateInfo[2].state);

let menu = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

// find a single element matching a condition
let searchId = 4;

let matching = null;

// let numItems = menu.length;
// for (let i = 0; i < numItems; i++) {
//   if (menu[i].id == searchId) {
//     matching = menu[i];
//     break; // you've found it! stop looking!
//   }
// }

// if (matching != null) {
//   console.log(matching.item + " costs $" + matching.price);
// } else {
//   console.log("Item " + searchId + " not found!");
// }

//ES6 find() function! Iterates over the array and calls that function for each element in the array
//You pass a FUNCTION object
//if true, find() stops and returns element
//if false, find() continues to iterate
//never finds a value? returns undefined

function isOver60(arrayValue) {
  return arrayValue > 60;
}

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];
let firstValOver60 = numbers.find(isOver60); // returns 64

// if (firstValOver60 != undefined) {
//   console.log(firstValOver60);
// } else {
//   console.log("No values over 60");
// }

//similar, findIndex(), returns the index of the first element that passes the test function
//if no values match, -1 returned

let firstValOver60Position = numbers.findIndex(isOver60);
// returns the index 2

// if (firstValOver60Position != -1) {
//   console.log("First value over 60 found at position " + firstValOver60Position);
// } else {
//   console.log("No values over 60");
// }

//filter() method
//returns an array of all values that pass a test function
//if no values match, an empty array (length == 0) is returned
let allOver60 = numbers.filter(isOver60);
// returns an array containing [64, 67, 66]

// if (allOver60.length > 0) {
//   console.log(allOver60); // displays the array
// } else {
//   console.log("No values over 60");
// }
