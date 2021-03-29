const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr , count = 1) {
    arr.forEach(e => {
      if (Array.isArray(e)) {
        let eDepth = this.calculateDepth(e);
            if (eDepth > count) count = eDepth;
            if (count === eDepth ) count++; 
      }
    });
    return count;
  }
};