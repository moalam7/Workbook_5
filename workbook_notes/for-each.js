"use strict";

//forEach() method calls a function for each element in the array

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

function displayKid(arrayElement){
  console.log(arrayElement.first + " " + arrayElement.last);
}

kids.forEach(displayKid);
