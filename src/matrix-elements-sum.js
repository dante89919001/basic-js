const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let columns = matrix[0].length;
  let row = matrix.length;
  
  let result = 0 ;
  for(let i = 0 ; i < row; i++)
  {
   for(let j = 0 ; j < columns; j++)
   {
     if(matrix[i][j] != 0 )
     {
       if(i === 0)
       {
         if(matrix[i][j] !== 0)
         {
           result += matrix[i][j];
         }
       }
       else{
         if(matrix[i - 1][j] !== 0)
         {
         result += matrix[i][j];
         }
       }
     }
   }
  }
  return result;
 }

module.exports = {
  getMatrixElementsSum
};
