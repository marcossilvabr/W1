function findWaldo(arr, found) {
  arr.forEach(found);
}

function actionWhenFound(element, index, array) {
  if (element === "Waldo") {
      console.log("Found Waldo at index " + index + "!");
  }
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)