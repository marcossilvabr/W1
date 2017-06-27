function obfuscate(pass) {
  var coded = "";
  for (var i = 0; i < pass.length; i++) {
    if (pass[i] === "a") {
      coded += "4";
    } else if (pass[i] === "e") {
      coded += "3";
    } else if (pass[i] === "o") {
      coded += "0";
    } else if (pass[i] === "l") {
      coded += "1";
    } else {
      coded += pass[i];
    }
  }
  console.log(coded);
}