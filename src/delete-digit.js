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
  const string = n.toString();
  for (let i = 0; i < string.length - 1; i++) {
    if (+string[i] < +string[i + 1]) {
      return +(string.slice(0, i) + string.slice(i + 1, string.length));
    }
  }
  return +(string.slice(0, string.length - 1));
}

module.exports = {
  deleteDigit
};
