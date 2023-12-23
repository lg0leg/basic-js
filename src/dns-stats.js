const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((item) => {
    let arr = item.split('.').reverse();
    while (arr.length) {
      const domain = arr.join('.');
      if (`.${domain}` in res) {
        res[`.${domain}`] += 1;
      } else {
        res[`.${domain}`] = 1;
      }
      arr.pop();
    }
  });
  return res;
}

module.exports = {
  getDNSStats,
};
