const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let resultArr = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    
    if(i === 0 && arr[i] !== arr[i+1]) {
      resultArr.push(1);
      resultArr.push(arr[i]);
    }
    else if(arr[i] === arr[i+1]) {
      sum++;
    }else {
      resultArr.push(sum);
      resultArr.push(arr[i]);
    } 
  }
  return resultArr.join('');
}

module.exports = {
  encodeLine
};
