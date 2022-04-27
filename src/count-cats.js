const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(hiddenEars) {
  let foundCats = [];
  for (let i = 0; i < hiddenEars.length; i++) {
    let cats = hiddenEars[i].filter(ears => ears === "^^");
    foundCats = [...foundCats, ...cats];
  }
  return foundCats.length;
}
module.exports = {
  countCats
};
