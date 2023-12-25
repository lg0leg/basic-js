const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.at(-1).length;
  },

  addLink(value) {
    if (this.chains.length) {
      this.chains.push([...this.chains.at(-1), `( ${value} )`]);
    } else {
      this.chains.push([`( ${value} )`]);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chains.at(-1).length) {
      this.chains = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    const farr = this.chains.at(-1).filter((val, idx) => idx != position - 1);
    this.chains.push(farr);
    return this;
  },

  reverseChain() {
    if (this.chains.at(-1)) {
      this.chains.at(-1).reverse();
    }
    return this;
  },

  finishChain() {
    const res = this.chains.at(-1).join('~~');
    this.chains = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
