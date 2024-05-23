"use strict";

let products = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

//Code that searches the array using map() function to return only the item name, and then use forEach() to display the list of items

//secret stuff happening inside map
// let productNames = [];
// for (const product of products) {
//   productNames.push(product.item);
// }
//return productNames

// let productNames = products.map(function getProductName(product) {
//   return product.item;
// });

let productNames = products.map((product) => product.item);

// productNames.forEach(function print(productName) {
//   console.log(productName);
// });

productNames.forEach((productName) => console.log(productName));

//Code that determines total cost of everything in the cart using reduce(), remember to account for the possibility of there being more than 1 unit(example, 5 apples rather than 1)


//Can you sort the list before displaying it? for first code
