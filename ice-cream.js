const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
// console.log(iceCreamFlavours);

iceCreamFlavours.push("root beer")
console.log(iceCreamFlavours)
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[iceCreamFlavours.length - 1]);
console.log(iceCreamFlavours.length)


const vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}