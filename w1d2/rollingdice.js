// Rolled 3 dice: 2, 6, 5
let rolls = Number(process.argv[2]);
let counter = rolls;
let output = "";
while ( counter > 0) {
  let random = Math.floor(Math.random() * (7 - 1) + 1);
  output+= (counter > 1) ? random + ", " : random;
  counter--;
}
// console.log(`Rolled ${process.argv[2]} dice: ${output}`);
console.log("rolled " + rolls + " dice: " + output);