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
  const x = [];
  let y = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== str[i - 1]) {
      x.push(str[i]);
      if (y !== 1) {
        x.push(y);
      }
      y = 1;
    } else {
      y++;
    }
  }
  return x.reverse().join('');
}

module.exports = {
  encodeLine
};
