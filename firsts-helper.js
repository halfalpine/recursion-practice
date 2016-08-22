// A function that takes one argument, an array, which is either an empty array or contains only non-empty arrays. It builds another array composed of the first value of each internal list.

// Right now this function works with only a single layer of nested arrays--more deeply nested arrays are not correctly concatenated.

let a = [['apple', 'peach', 'pumpkin'], ['plum', 'pear', 'cherry'], ['grape', 'raisin', 'pea'], ['bean', 'carrot', 'eggplant']];
let b = [['a', 'b'], ['c', 'd'], ['e', 'f']];
let c = [];
let d = [['five', 'plums'], ['four'], ['eleven', 'green', 'oranges']];
let e = [[['five', 'plums'], 'four'], ['eleven', 'green', 'oranges'], [['no'], 'more']];

function firsts(arr){
  if (arr.length === 0) {
    return [];
  } else {
    return [].concat(arr[0][0]).push(firsts(arr.slice(1)));
  }
}

function firsts(arr) {
  let newArr = [];
  function
  function helper(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return newArr.push(arr[0][0].push(helper(arr.slice(1))));
    }
  }
  helper(arr);
}

function firsts(arr){
  if (arr.length === 0) {
    return [];
  } else {
    return [].concat(arr[0][0]).push(firsts(arr.slice(1)));
  }
}

function firsts(arr){
  newArr = [];
  function pusher(item, array){

  }
  if (arr.length === 0) {
    return [];
  } else {
    return pusher(arr[0][0], arr.slice(1));
  }
}
