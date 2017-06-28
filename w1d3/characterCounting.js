var result = {};

function countLetters(word) {
  var string = word.split(' ').join('').split('');
  for (i = 0; i < string.length; i++) {
    var char = string[i];
    if (result[char] === undefined) {
      result[string[i]] = 1;
    } else {
      result[string[i]] += 1;
    }
  }
 return result;
}


console.log(countLetters('lighthouse in the house'));