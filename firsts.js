// A function that takes one argument, an array, which is either an empty array or contains only non-empty arrays. It builds another array composed of the first value of each internal list.

let a = [['apple', 'peach', 'pumpkin'], ['plum', 'pear', 'cherry'], ['grape', 'raisin', 'pea'], ['bean', 'carrot', 'eggplant']];
let b = [['a', 'b'], ['c', 'd'], ['e', 'f']];
let c = [];
let d = [['five', 'plums'], ['four'], ['eleven', 'green', 'oranges']];
let e = [[['five', 'plums'], 'four'], ['eleven', 'green', 'oranges'], [['no'], 'more']];

function firsts(arr){
  if (arr.length === 0) {
    return [];
  } else {
    return arr[0][0].push(firsts(arr.slice(1)));
  }
}
