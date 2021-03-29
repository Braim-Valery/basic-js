const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  const finalActiv = Number.parseFloat(sampleActivity);

  if (
    typeof sampleActivity !== 'string' ||
    Number.isNaN(finalActiv) ||
    finalActiv <= 0 ||
    finalActiv >= MODERN_ACTIVITY
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / finalActiv) / k;

  return Math.ceil(t);
};