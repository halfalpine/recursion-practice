let a1 = 'and', a2 = ['peanut', 'butter', 'and', 'jelly'];
let b1 = 'pizza', b2 = ['chocolate', 'milkshake'];
let c1 = 'sundae', c2 = ['sundae', 'with', 'a', 'cherry', 'on', 'top'];
let d1 = 'coffee', d2 = 'coffee';
let e1 = 'tea', e2 = '';

function rember(str, arr){
  if (arr.length === 0) {
    return '';
  }
  if (str === arr[0]) {
    return arr.substr(1);
  } else {
    arr[0].concat(rember(str, arr.substr(1)));
  }
}
