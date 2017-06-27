var word = process.argv.slice(2);

for (var i = 0; i < word.length; i++){
  var final = ''
  for (var y = word[i].length-1; y >= 0; y--){
    final += word[i][y];
  }
  console.log(final);
}