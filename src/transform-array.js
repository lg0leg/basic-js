const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`\'arr\' parameter must be an instance of the Array!`);
  } else {
    let arrTrans = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-next' && (arr[i + 2] == '--discard-prev' || arr[i + 2] == '--double-prev')) {
        i = i + 2;
      } else if (arr[i] == '--discard-next' && !(arr[i + 2] == '--discard-prev' || arr[i + 2] == '--double-prev')) {
        i = i + 1;
      } else if (arr[i] == '--discard-prev' && arr[i - 2] != '--discard-next') {
        arrTrans.pop();
      } else if (arr[i] == '--double-next' && arr[i + 1] != undefined) {
        arrTrans.push(arr[i + 1]);
      } else if (arr[i] == '--double-next' && arr[i + 1] == undefined) {
        i = i;
      } else if (arr[i] == '--double-prev' && arr[i - 1] != undefined) {
        arrTrans.push(arr[i - 1]);
      } else if (arr[i] == '--double-prev' && arr[i - 1] == undefined) {
        i = i;
      } else {
        arrTrans.push(arr[i]);
      }
    }
    return arrTrans;
  }
}

module.exports = {
  transform,
};
