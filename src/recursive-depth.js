const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(arr.filter(Array.isArray).length === 0 || arr === []) {
      return 1;
    }else {
      let sum = 1;
      for(let item of arr) {
        if(Array.isArray(item)) {
          sum += calculateDepth(item);
        }
      };
      return sum; 
    }
  }
}

module.exports = {
  DepthCalculator
};

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]);