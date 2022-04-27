const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length
  },
  addLink(value) {
      this.chain.push(`( ${value} )`);
      return this
  },
  removeLink(position) {
    if (typeof (position) == 'number' && position ^ 0 == position)
      if (0 < position && position <= this.chain.length) {
        this.chain.splice(position - 1, 1);
        return this;
      }
    this.chain.length = 0;
    throw Error("You can't remove incorrect link!");
  },
  reverseChain() {
      this.chain.reverse();
      return this
  },
  finishChain() {
      let arr = [];
      for (let i = 0; i < this.chain.length; i++) {
          if (i !== this.chain.length - 1) {
              arr.push(this.chain[i] + '~~');
          } else {
              arr.push(this.chain[i]);
          }
      }
      this.chain = [];
      return arr.join('')
  }
};

module.exports = {
  chainMaker
};
