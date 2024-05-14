"use strict";

let products = [
    {item: "Bread", price: 3.29, quantity: 2},
   {item: "Milk", price: 4.09, quantity: 1},
   {item: "T-Bone Steak", price: 12.99, quantity: 2},
   {item: "Baking Potato", price: 1.89, quantity: 6},
   {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
   {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
   {item: "Apples", price: 0.66, quantity: 6}
  ];


// let productNames = [];
// for (const product of products){
//   productNames.push(product.item);
// }

//function to pass into map
function getProductNames(product) {
  return product.item;
}

//map creates an empty array, and them for every element in the array it pushes
// that element into the empty array
let productNames = products.map(product);

console.log(productNames);
