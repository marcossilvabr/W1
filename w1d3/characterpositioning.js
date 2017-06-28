var result = {};

function countLetters(word) {
  var string = word.split(' ').join('').split('');
  for (i = 0; i < string.length; i++) {
    var char = string[i];
    if (result[char] === undefined) {
      result[string[i]] = [i];
    } else {
      result[string[i]].push(i);
    }
  }
 return result;
}


console.log(countLetters('lighthouse in the house'));