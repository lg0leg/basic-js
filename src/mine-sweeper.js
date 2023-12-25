const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const first = [];

  matrix.forEach((arr) => {
    first.push(
      arr.map((val, idx, array) => {
        if (array[idx - 1] == true && array[idx + 1] == true) {
          return 2;
        }
        if (array[idx - 1] == true || array[idx + 1] == true) {
          return 1;
        }
        return 0;
      })
    );
  });

  const res = first.map((arr, idxA) => {
    return arr.map((val, idxV) => {
      let add = 0;
      if (matrix[idxA - 1]) {
        matrix[idxA - 1][idxV] == true ? add++ : null;
        matrix[idxA - 1][idxV - 1] == true ? add++ : null;
        matrix[idxA - 1][idxV + 1] == true ? add++ : null;
      }
      if (matrix[idxA + 1]) {
        matrix[idxA + 1][idxV] == true ? add++ : null;
        matrix[idxA + 1][idxV - 1] == true ? add++ : null;
        matrix[idxA + 1][idxV + 1] == true ? add++ : null;
      }
      return val + add;
    });
  });

  return res;
}

module.exports = {
  minesweeper,
};
