// The second argument/parameter is expected to be a function
findWaldo = function (arr, found) {
    arr.forEach(function(arr)) {
    if (arr[i] === "Waldo") {
      var a = arr.indexOf(arr[i]);
      found(a);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);