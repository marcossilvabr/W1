function rounded(number){
  return Math.floor(number);
}

function addThree(x){
  return rounded(x) + 10;
}

module.exports = {
  addThree: addThree,
}