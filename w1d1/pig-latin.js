var word = process.argv.slice(2);
var addAy = "ay";

  for (i = 0; i < word.length; i++) {
    var firstLet = word[i][0];
    var result = .push(firstLet);
    var pigLatin = result + addAy;
  }

console.log(pigLatin);


/*var word = process.argv.slice(2);
var pigAy = 'ay';
var pigLatin = '';

for (var i = 0; i < word.length; i++){
  firstLetter = word[i][0];
  var cutWord = (word[i].slice(1));
  if (i === 0){
  pigLatin += (cutWord + firstLetter + pigAy);
  } else {
  pigLatin += (' ' + cutWord + firstLetter + pigAy);
  }
}
console.log(pigLatin);
*/