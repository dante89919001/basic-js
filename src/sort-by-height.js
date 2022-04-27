const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let ArrSort = [];
  for(let i = 0 ; i < arr.length; i++)
  {
    ArrSort[i] = arr[i];
  }
  ArrSort = ArrSort.sort((a, b) => a - b);
  let result = [];
  let j = ArrSort.length - 1 ;
  for(let i = arr.length -1 ; i >= 0 ; i--)
  {
    if(arr[i] === -1)
      result[i] = (-1);
    else
    {
      result[i] = ArrSort[j];
      j--;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
