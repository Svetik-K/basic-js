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
  let add = options.addition;
  let strToAdd = add;
  let i = 1;
  while(i < options.additionRepeatTimes) {
    strToAdd += ((options.additionSeparator || '|') + add);
    i++;
  }
  let resultStr = str + (strToAdd || '');
  let finalStr = resultStr;
  let n = 1;
  while(n < options.repeatTimes) {
    finalStr += ((options.separator || '+') + resultStr);
    n++;
  }
  return finalStr;
}


module.exports = {
  repeater
};
