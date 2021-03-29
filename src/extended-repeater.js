const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  const {
    repeatTimes  = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const add = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);

  return `${str}${add}${separator}`.repeat(repeatTimes).slice(0, -separator.length);
};
  