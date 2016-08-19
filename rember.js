let a1 = 'and', a2 = ['peanut', 'butter', 'and', 'jelly'];
let b1 = 'pizza', b2 = ['chocolate', 'milkshake'];
let c1 = 'sundae', c2 = ['sundae', 'with', 'a', 'cherry', 'on', 'top'];
let e1 = 'tea', e2 = '';

function rember(str, arr){
  //console.log(str, arr);
  if (arr.length === 0) {
    return '';
  }
  if (str === arr[0]) {
    return arr.slice(1);
  } else {
    console.log('recursing...');
    return arr[0].concat(' ').concat(rember(str, arr.slice(1)));
  }
}
