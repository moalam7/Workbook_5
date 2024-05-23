"use strict";

let lockerAndAccessCode = [
  ["Locker 1", 135],
  ["Locker 2", 159],
  ["Locker 3", 642],
];

// access the first element
// console.log(lockerAndAccessCode[0]); // ["Locker 1", 135]

// access the first inner elemet of the second element
// console.log(lockerAndAccessCode[1][0]); // "Locker 2"

let teamMembers = [
  ["Dana", "Brenda", "Happy"],
  ["Laura", "Patti"],
  ["Leslye", "Randy", "Mollye", "Ranse"],
  ["Eloise", "Robert"],
];

let numTeams = teamMembers.length;
for (let i = 0; i < numTeams; i++) {
  // console.log("-----------");

  // console.log("Team " + (i + 1));
  // console.log("-----------");

  let numMembers = teamMembers[i].length;
  for (let j = 0; j < numMembers; j++) {
    // console.log(teamMembers[i][j]);
  }
}

function displayPlayer(member) {
  console.log(member);
}

let numTeams1 = teamMembers.length;
for (let i = 0; i < numTeams1; i++) {
  console.log("-----------");
  console.log("Team " + (i + 1));
  console.log("-----------");

  teamMembers[i].forEach(displayPlayer);
}
