// Create a recursive function to see if an array contains nothing other than numbers.

var a = [1, 2, 3] // true

var b = [a, b, c] // false

var c = [1, 2, c] // false

var d = [] // true


function checkLetters(arr) {
  if (arr.length === 0) {
    return true;
  }
  if (typeof arr[0] === 'number') {
    return checkLetters(arr.slice(1));
  } else {
    return false;
  }
};