const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    let num;
    if(i === 0) {
      num = arr.slice(1, arr.length).join('');
    } else {
      num = arr.slice(0, i).concat(arr.slice(i + 1, arr.length)).join('');
    }
    resultArr.push(+num);
  }
  return Math.max(...resultArr);
}


module.exports = {
  deleteDigit
};
