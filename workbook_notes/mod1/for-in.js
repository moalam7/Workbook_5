"use strict";

let person = {name: "Pursalane", age: 11, gender: "Female"};

console.log(person.name);
console.log(person["age"]);
console.log(person["gender"]);


for (let key in person){
  console.log(key + "=" + person[key]);
}

// OUTPUT
// name = Pursalane
// age = 11
// gender = Female
