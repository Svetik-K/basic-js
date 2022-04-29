const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this.chain;
  },
  removeLink(position) {
    if(typeof position === Number && position < this.chain.length - 1 && position >= 0) {
      this.chain.splice(position - 1, 1);
      return this.chain;
    }else {
      
      return "You can't remove incorrect link!";
      
    }  
  },
  reverseChain() {
    this.chain.reverse();
    return this.chain; 
  },
  finishChain() {  
    return this.chain.join('~~');
    
  }
};

module.exports = {
  chainMaker
};

