const path = require('path');
const fs = require('fs').promises
module.exports = function(context, options) {
  return {
    name: 'load-typedocs',
    async loadContent() {
      const n = 1 + Math.floor(Math.random() * 10);
      console.log('!!!!Path is ', __dirname)
      return n
    },
  };
};