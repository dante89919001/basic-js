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
  calculateDepth(arr, counter = [], depth = 1) {
    counter.push(depth);
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        this.calculateDepth(elem, counter, depth + 1);
      }
    }  
    return Math.max(...counter);
   }
}

module.exports = {
  DepthCalculator
};
