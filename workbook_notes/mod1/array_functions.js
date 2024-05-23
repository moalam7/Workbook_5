"use strict";

//just parameters in parentheses, an arrow, and the return value

let multiply2 = (a,b) => a * b;

// console.log(multiply2(2,3));

let numbers = [300, 150, 25];

function getSum(currentTotal, arrayValue) {
 return currentTotal + arrayValue;
}

let getSum1 = (currentTotal, arrayValue) => currentTotal + arrayValue;

//now to apply it to reduce in one line:

let arraySum = numbers.reduce((currentTotal, arrayValue) => currentTotal + arrayValue, 0);

// console.log(arraySum);

// Convert this function to an arrow function
function double(x) {
  return x * 2;
}

let double1 = (x) => x*2;
// console.log(double1(5));

// Create an arrow function that returns the string "Hello, World!"
const sayHello = () => "Hello, World!";

// Create an arrow function that takes two parameters, firstName and lastName, and returns an object with properties firstName and lastName

const names = (firstName, lastName) => ({firstName, lastName});
// console.log(names("Mohammed", "Alam"));

// Use the map method with an arrow function to create a new array that contains the squares of the elements in the original array
const numbers1 = [1, 2, 3, 4, 5, 6];
const newNumbers = numbers1.map((x) => x*x);

console.log(newNumbers);

// Use the filter method with an arrow function to create a new array that contains only the even numbers from the original array
const filterEvens = numbers1.filter(n => n % 2 === 0);
console.log(filterEvens);

// Use the reduce method with an arrow function to sum all the numbers in the array
const arraySum1 = numbers1.reduce((total, n) => total + n, 0);
console.log(arraySum1);

// Add a method to the object using an arrow function that returns the full name (concatenation of firstName and lastName)
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
      // Add arrow function here
      return () =>`${this.firstName} ${this.lastName}`;
  }
};

const getFullName = person.fullName();
console.log(getFullName()); // John Doe


const myButton = document.getElementById("myButton");

mybutton.onclick( () => {
 let message = "Hello World";
 alert(message);
} );
