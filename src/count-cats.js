const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
 let catCount = 0;
  for ( let elem of matrix) {
    elem.forEach(e => { if (e === '^^') catCount += 1;
  });
  }
  return catCount;
};
