const CustomError = require("../extensions/custom-error");

const chain = [];
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    chain.push(String(value));
    return this;
  },
  removeLink(position) {
    const index = position - 1;

    if (Number.isNaN(index) || index < 0 || index > chain.length - 1) {
      chain.length = 0;

      throw new Error();
    }

    chain.splice(index, 1);

    return this;
  },
  reverseChain() {
    chain.reverse();

    return this;
  },
  finishChain() {
    const result = `( ${chain.join(' )~~( ')} )`;

    chain.length = 0;

    return result;
  },
};

module.exports = chainMaker;
