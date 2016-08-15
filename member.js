// Create a recursive function to see if an array contains a string.

var a1 = "cabbage", a2 = ["apples", "bananas", "cabbage", "durian"] // True
var b1 = "cabbage", b2 = ["apples", "bananas", "coconuts", "durian"] // False
var c1 = "cabbage", c2 = [] // False

function member(str, arr) {
  if (arr.length === 0) {
    return false;
  }
  if (str === arr[0]) {
    return true;
  } else { 
    return member(str, arr.splice(1));
  }
};