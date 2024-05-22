"use strict";

//reduce() method executes a reducer function for array elements

//reduce() returns a single value, which is the reducer's accumulated result

let numbers = [300, 150, 25];

function getSum(currentTotal, arrayValue){
  //adds the array value to the accumulated total
  return currentTotal + arrayValue;
}

let sum = numbers.reduce(getSum, 0);

// console.log(sum);


let purchasedOptions = [
  {item: "A/C", price: 1019.00},
  {item: "Sunroof", price: 699.99},
  {item: "AM/FM Stereo w/ cassette player", price: 199.00}
 ];

 function getTotalCost(currentTotal, arrayElement){
  return currentTotal + arrayElement.price;
 }

 let sum1 = purchasedOptions.reduce(getTotalCost, 0);

//  console.log(sum1);

//In following example, it multiplies ticket price by the NUMBER of TICKETS, before adding to accumulated total
//much more complicated

let ticketPackage = [
  {ticketType: "Senior", price: 49.99, numTickets: 1},
  {ticketType: "Adult", price: 79.99, numTickets: 2},
  {ticketType: "Child", price: 29.99,numTickets: 3}
 ];

 function getTotalCostTickets(currentTotal, arrayElement){
  return currentTotal + (arrayElement.price * arrayElement.numTickets);
 }

 let sum2 = ticketPackage.reduce(getTotalCostTickets, 0);

//  console.log(sum2);
