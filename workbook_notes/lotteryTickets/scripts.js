"use strict";
// let winningTickets = [
//   { tixNum: "1001001", expires: "2022-09-05", prize: 100000 },
//   { tixNum: "1298711", expires: "2022-10-10", prize: 250000 },
//   { tixNum: "1309182", expires: "2022-12-30", prize: 500000 },
//   { tixNum: "1456171", expires: "2023-01-20", prize: 1000000 },
//   { tixNum: "3332871", expires: "2022-05-20", prize: 1000000 },
//   { tixNum: "4651529", expires: "2022-12-15", prize: 100000 },
//   { tixNum: "5019181", expires: "2023-01-31", prize: 250000 },
//   { tixNum: "5168261", expires: "2023-03-01", prize: 1000000 },
//   { tixNum: "6761529", expires: "2022-12-15", prize: 250000 },
//   { tixNum: "7778172", expires: "2023-01-15", prize: 5000000 },
//   { tixNum: "8751426", expires: "2020-09-15", prize: 100000 },
// ];

window.onload = () => {
  loadWinningTicketsTable();
};

function loadWinningTicketsTable() {
  let table = document.querySelector("#winningTicketsTbl");

  // Loop through the array
  for (const winningTicket of winningTickets) {
    buildTicketRow(table, winningTicket);
  }
}

//Helper function to create the row and then for each element in the array, have it be an input in this function to spit out the row
//Reads better
//Always want simple functions and functions to call on other functions
//break things down!
function buildTicketRow(table, theTicket) {
  // Create an empty <tr> element and add it to the last position of the table
  let row = table.insertRow(-1);

  // Create new cells (<td> elements) and add text
  let cell1 = row.insertCell(0);
  cell1.innerHTML = theTicket.tixNum;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = `$${theTicket.prize.toFixed(2)}`;

  let cell3 = row.insertCell(2);
  cell3.innerHTML = theTicket.expires;
}
