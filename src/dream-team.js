const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) ?
  members.reduce((acc, i) => typeof i === 'string' ? acc += i.trim()[0].toUpperCase() : acc,'').
  split('').sort().join('') : false ;
  
};
