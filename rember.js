let a1 = 'and', a2 = ['peanut', 'butter', 'and', 'jelly'];
let b1 = 'cowboy', b2 = ['home', 'on', 'the', 'range'];
let c1 = 'watermelon', c2 = ['watermelon'];
let d1 = 'piza', d2 = [];

function rember(str, arr){
  if (arr.length === 0) {
    return null;
  }
  if (str === arr[0]) {
    return arr.slice(1);
  } else {
    return arr[0].concat(return rember(str, arr.substr(1)));
  }
}
