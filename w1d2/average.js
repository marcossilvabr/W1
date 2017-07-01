function average(list) {
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    var num = list[i];
    var sum = sum + num
  }
  return sum / list.length;
}

console.log(average([3, 5, 3, 5]));