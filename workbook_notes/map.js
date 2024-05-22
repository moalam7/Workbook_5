"use strict";

//map() function is used to transform or map elements from one array into elements in a new array
//to do this map() iterates over each element in the array and passes the current element to a transform function

//The transform function "transforms" or manipulates the incoming data and returns a value that is added to the new array

//Example

//Initial Array
let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

//Function to return both first and last name properties into a single string
function buildFullName(arrayElement) {
  return arrayElement.first + " " + arrayElement.last;
}

//Map the kids Array into a new array where fullName function applies
let namesList = kids.map(buildFullName);

function displayName(arrayElement){
  console.log(arrayElement);
}

namesList.forEach(displayName);

//Loop through new Mapped out array to log out the elements
//The displayfunction is this below, can just be called with forEach
// for (const nameList of namesList){
//   console.log(nameList);
// }
