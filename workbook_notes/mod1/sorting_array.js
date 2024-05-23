"use strict";

//Anonymous function
let numbers = [3, 27, 400, 1, 111, 5];

numbers.sort(function (a, b) {
  if (a < b) return -1;
  else if (a == b) return 0;
  else return 1;
});

// console.log(numbers);

//Using math, can just do this below and get the same value

function compareAscendingNumber(a, b) {
  return a - b;
}

// console.log(numbers.sort(compareAscendingNumber));

//Can sort array of objects too
let products = [
  { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, item: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 22, item: "Stapler", price: 12.79 },
];

products.sort(function(a, b){
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1;
 });

//  for (const product of products){
//   console.log(product.item + " $" + product.price);
//  }
