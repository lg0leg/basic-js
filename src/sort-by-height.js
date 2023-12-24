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
  let i = 0;
  const arrS = arr.filter((val) => val != -1).sort((a, b) => a - b);
  const res = [];
  arr.forEach((item) => {
    if (item == -1) {
      res.push(-1);
    } else {
      res.push(arrS[i]);
      i++;
    }
  });
  return res;
}

module.exports = {
  sortByHeight,
};
