var words = ["ground", "control", "to", "major", "tom"];

function map (word, callback) {
  var array = [];
    for(var i = 0; i < word.length; i++){
      array.push(callback(word[i]));
  }
  console.log(array);
}
map(words, function(word){
  return word.length;
});