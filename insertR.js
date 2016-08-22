let a1 = 'topping', a2 = 'fudge', a3 = ['ice', 'cream', 'with', 'fudge', 'for', 'dessert'];
let b1 = 'jalepeño', b2 = 'and', b3 = ['tacos', 'tamales', 'and', 'salsa'];
let c1 = 'e', c2 = 'd', c3 = ['a', 'b', 'c', 'd', 'f', 'g', 'h'];
let d1 = 'hot', d2 = 'red', d3 =['red', 'chili', 'peppers'];

function insertR(neew, old, arr) {
  if (arr.length === 0) {
    return [];
  } else {
    if (arr[0] === old) {
      return Array.of(old).concat(neew).concat(arr.slice(1));
    } else {
      return [].concat(arr[0]).concat(insertR(neew, old, arr.slice(1)));
    }
  }
}
