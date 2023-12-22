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
  n = String(n);
  const arr = [];
  for (let index = 0; index < n.length; index++) {
    arr.push(n);
  }
  const arrMod = arr.map((val, idx) => Number(val.substring(0, idx) + val.substring(idx + 1, val.length)));
  return Math.max(...arrMod);
}

module.exports = {
  deleteDigit,
};
