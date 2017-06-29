var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(input) {
 var one = input.x;
 var two = input.y;
 var z = Math.pow((one*one + two*two),(1/2));
 return z;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// x^2 + y^2 = z^2