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
    return "'arr' parameter must be an instance of the Array!";
  }

  if(arr) {
    arr.map(item, index => {
      if(item === '--discard-next' && index !== arr.length - 1) {
        arr.splice(item[index+1], 1);
      }
      else if(item === '--discard-prev' && index !== 0) {
        arr.splice(item[index-1], 1);
      }
      else if(item === '--double-next' && index !== arr.length - 1) {
        item[index+1] * 2;
      }
      else if(item === '--double-prev'  && index !== 0) {
        item[index+1] * 2;
      }
    });
    return arr;
  }
}

module.exports = {
  transform
};


