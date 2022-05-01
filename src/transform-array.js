const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(arr === []) {
    return arr;
  }
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const commands = ['--discard-prev', '--double-prev', '--double-next', '--discard-next'];
  let modified = [];
  for(let i = 0; i < arr.length; i++) {
    if(!commands.includes(arr[i])) {
      modified.push(arr[i]);
    } else {
      if(arr[i] === '--discard-prev') {
        modified.pop();
      }
      else if(arr[i] === '--double-prev') {
        modified.push(arr[i-1]);
      }
      else if(arr[i] === '--double-next') {
        modified.push(arr[i+1]);
      }
      else if(arr[i] === '--discard-next') {
        arr.splice(i+1, 1);
      }
    }
  }
  return modified;
}

module.exports = {
  transform
};



