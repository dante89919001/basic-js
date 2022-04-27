const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let firstValue = 0;
  let secondValue = s2;
  for (let i = 0; i < s1.length; i++) {
    if (secondValue.includes(s1[i])) {
      firstValue++;
      secondValue = secondValue.replace(s1[i], '');
    }
  }
  return firstValue;
}

module.exports = {
  getCommonCharacterCount
};
