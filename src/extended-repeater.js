const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let rt = 1;
  let art = 1;

  let sep = '+';
  let asep = '|';

  let mainstr = String(str);
  let astr = '';

  if (typeof options !== 'undefined') {
    if ('repeatTimes' in options) {
      rt = options.repeatTimes;
    }
    if ('additionRepeatTimes' in options) {
      art = options.additionRepeatTimes;
    }
    if ('separator' in options) {
      sep = options.separator;
    }
    if ('additionSeparator' in options) {
      asep = options.additionSeparator;
    }
    if ('addition' in options) {
      astr = String(options.addition);
    }
  }

  let str0 = asep + astr;
  let str1 = mainstr + astr + str0.repeat(art - 1);
  let str2 = sep + str1;
  let str3 = str1 + str2.repeat(rt - 1);

  return str3;
}

module.exports = {
  repeater,
};
